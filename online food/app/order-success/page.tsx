import Link from "next/link";
import { CheckCircle, Home, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatOrderId } from "@/lib/orders";

interface OrderSuccessPageProps {
  searchParams: Promise<{ id?: string }>;
}

export default async function OrderSuccessPage({ searchParams }: OrderSuccessPageProps) {
  const { id } = await searchParams;
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Success Icon */}
        <div className="mb-6 inline-flex">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-green-400/30" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-14 w-14 text-green-600" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
          Order Placed Successfully!
        </h1>
        <p className="mb-2 text-lg text-muted-foreground">
          Thank you for your order
        </p>
        <p className="mb-8 text-muted-foreground">
          Your delicious food is being prepared and will be delivered to you
          shortly. Estimated delivery time is{" "}
          <span className="font-semibold text-primary">25-35 minutes</span>.
        </p>

        {/* Order Details Card */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Order ID:</span>
            <span className="font-mono font-semibold text-foreground">
              {id ? formatOrderId(id) : "—"}
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-muted-foreground">Order Confirmed</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/orders" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              View Orders
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
