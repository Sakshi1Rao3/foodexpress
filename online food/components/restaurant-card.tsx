"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Restaurant } from "@/lib/data";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="text-lg font-semibold text-card">{restaurant.name}</h3>
            <p className="text-sm text-card/80">{restaurant.cuisine}</p>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium text-foreground">
                {restaurant.rating}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span className="truncate">{restaurant.location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
