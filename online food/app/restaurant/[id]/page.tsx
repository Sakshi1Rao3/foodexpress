import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Clock, MapPin } from "lucide-react";
import { getRestaurantById, getMenuByRestaurantId } from "@/lib/data";
import { MenuItemCard } from "@/components/menu-item-card";
import { Button } from "@/components/ui/button";

interface RestaurantPageProps {
  params: Promise<{ id: string }>;
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { id } = await params;
  const restaurantId = parseInt(id, 10);
  const restaurant = getRestaurantById(restaurantId);

  if (!restaurant) {
    notFound();
  }

  const menuItems = getMenuByRestaurantId(restaurantId);

  // Group menu items by category
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div className="bg-background pb-12">
      {/* Restaurant Header */}
      <div className="relative h-48 md:h-64 lg:h-80">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

        {/* Back Button */}
        <div className="absolute left-4 top-4">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>

        {/* Restaurant Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="container mx-auto">
            <h1 className="mb-2 text-2xl font-bold text-card md:text-3xl lg:text-4xl">
              {restaurant.name}
            </h1>
            <p className="mb-3 text-card/90">{restaurant.cuisine}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-card/80">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium text-card">{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{restaurant.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mx-auto px-4 pt-8">
        <h2 className="mb-6 text-xl font-bold text-foreground md:text-2xl">
          Menu
        </h2>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {category}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    restaurant={restaurant}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
