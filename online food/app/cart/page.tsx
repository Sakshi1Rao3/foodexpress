"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, ArrowLeft, ShoppingCart, Loader2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useAuth } from "@/context/auth-context";
import { createClient, SUPABASE_NOT_CONFIGURED_MESSAGE } from "@/lib/supabase-client";
import { CartItem } from "@/components/cart-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CartPage() {
  const router = useRouter();
  const { items, totalAmount, clearCart } = useCart();
  const { user, loading: authLoading } = useAuth();
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");

  const handlePlaceOrder = async () => {
    setError("");

    if (!user) {
      router.push("/login?next=/cart");
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      setError(SUPABASE_NOT_CONFIGURED_MESSAGE);
      return;
    }

    setPlacing(true);
    const { data, error: insertError } = await supabase
      .from("user_orders")
      .insert({
        user_id: user.id,
        items,
        subtotal: totalAmount,
        delivery_fee: deliveryFee,
        taxes,
        total: grandTotal,
      })
      .select("id")
      .single();

    if (insertError || !data) {
      setError(insertError?.message || "Could not place your order. Please try again.");
      setPlacing(false);
      return;
    }

    clearCart();
    router.push(`/order-success?id=${data.id}`);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Your cart is empty
          </h1>
          <p className="mb-6 text-muted-foreground">
            Looks like you {"haven't"} added any items to your cart yet.
          </p>
          <Button asChild>
            <Link href="/">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Browse Restaurants
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const deliveryFee = 40;
  const taxes = Math.round(totalAmount * 0.05);
  const grandTotal = totalAmount + deliveryFee + taxes;

  return (
    <div className="bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Your Cart</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="text-foreground">₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxes & Charges</span>
                    <span className="text-foreground">₹{taxes}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">₹{grandTotal}</span>
                  </div>
                </div>

                {error && (
                  <div className="rounded-lg bg-destructive/10 px-4 py-2 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <Button
                  onClick={handlePlaceOrder}
                  className="w-full"
                  size="lg"
                  disabled={placing || authLoading}
                >
                  {placing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Placing Order...
                    </>
                  ) : user || authLoading ? (
                    "Place Order"
                  ) : (
                    "Login to Place Order"
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By placing this order, you agree to our Terms of Service and
                  Privacy Policy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
