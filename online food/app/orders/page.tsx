import Link from "next/link";
import { ClipboardList, ShoppingBag, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrdersPage() {
  // In a real app, this would fetch orders from a database
  const orders: { id: string; date: string; status: string; total: number }[] = [];

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
      {/* Order list would be rendered here */}
    </div>
  );
}
