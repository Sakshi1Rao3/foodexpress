"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ClipboardList, ShoppingBag, Home, Loader2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/auth-context";
import { createClient, SUPABASE_NOT_CONFIGURED_MESSAGE } from "@/lib/supabase-client";
import { formatOrderId, type Order } from "@/lib/orders";

export default function OrdersPage() {
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      setOrders([]);
      setLoading(false);
      return;
    }

    const supabase = createClient();
    if (!supabase) {
      setError(SUPABASE_NOT_CONFIGURED_MESSAGE);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    supabase
      .from("user_orders")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (cancelled) return;
        if (fetchError) {
          setError(fetchError.message);
        } else {
          setError("");
          setOrders((data as Order[]) || []);
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [user, authLoading]);

  if (authLoading || loading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ClipboardList className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            Sign in to see your orders
          </h1>
          <p className="mb-6 text-muted-foreground">
            Your order history is saved to your FoodExpress account.
          </p>
          <Button asChild>
            <Link href="/login?next=/orders" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Login
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md rounded-lg bg-destructive/10 px-4 py-3 text-center text-sm text-destructive">
          {error}
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
            <ClipboardList className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            No orders yet
          </h1>
          <p className="mb-6 text-muted-foreground">
            You {"haven't"} placed any orders yet. Start exploring our delicious
            restaurants!
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Browse Restaurants
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-foreground">Your Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <CardTitle className="font-mono text-base">
                  {formatOrderId(order.id)}
                </CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  {new Date(order.created_at).toLocaleString()}
                </p>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium capitalize text-green-700">
                {order.status}
              </span>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-1 text-sm">
                {order.items.map((item) => (
                  <li key={item.id} className="flex justify-between gap-4">
                    <span className="text-foreground">
                      {item.name} × {item.quantity}
                      <span className="text-muted-foreground"> · {item.restaurantName}</span>
                    </span>
                    <span className="text-muted-foreground">
                      ₹{item.price * item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between border-t border-border pt-3 font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">₹{order.total}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
