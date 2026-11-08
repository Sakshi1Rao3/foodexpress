"use client";

import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, type CartItem as CartItemType } from "@/context/cart-context";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.restaurantName}</p>
        <p className="mt-1 font-medium text-primary">
          ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-destructive hover:bg-destructive/10 hover:text-destructive"
          onClick={() => removeItem(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-6 text-center font-medium text-foreground">
            {item.quantity}
          </span>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
