"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import type { MenuItem, Restaurant } from "@/lib/data";

interface MenuItemCardProps {
  item: MenuItem;
  restaurant: Restaurant;
}

export function MenuItemCard({ item, restaurant }: MenuItemCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      image: item.image,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col sm:flex-row">
        <div className="relative aspect-square w-full sm:aspect-[4/3] sm:w-40">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 160px"
          />
          {/* Veg/Non-veg indicator */}
          <div className="absolute left-2 top-2">
            <div
              className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
                item.isVeg
                  ? "border-green-600 bg-card"
                  : "border-red-600 bg-card"
              }`}
            >
              <div
                className={`h-2 w-2 rounded-full ${
                  item.isVeg ? "bg-green-600" : "bg-red-600"
                }`}
              />
            </div>
          </div>
        </div>
        <CardContent className="flex flex-1 flex-col justify-between p-4">
          <div>
            <div className="mb-1 flex items-start justify-between gap-2">
              <h3 className="font-semibold text-foreground">{item.name}</h3>
              <span className="whitespace-nowrap font-semibold text-primary">
                ₹{item.price}
              </span>
            </div>
            <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
            <span className="inline-block rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
              {item.category}
            </span>
          </div>
          <div className="mt-4">
            {quantity === 0 ? (
              <Button
                onClick={handleAddToCart}
                className="w-full sm:w-auto"
                size="sm"
              >
                <Plus className="mr-1 h-4 w-4" />
                Add to Cart
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => updateQuantity(item.id, quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium text-foreground">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => updateQuantity(item.id, quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
