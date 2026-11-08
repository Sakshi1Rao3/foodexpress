import { restaurants } from "@/lib/data";
import { RestaurantCard } from "@/components/restaurant-card";
import { Search, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Delicious Food,
              <span className="text-primary"> Delivered Fast</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-pretty">
              Order from the best restaurants in your area. Fresh, hot, and at your doorstep in minutes.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <div className="relative flex-1 sm:max-w-md">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="w-full rounded-lg border border-input bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                <Search className="h-5 w-5" />
                Find Restaurants
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-4 top-1/4 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-1/4 right-4 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      </section>

      {/* Restaurant Listing Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Popular Restaurants
              </h2>
              <p className="mt-1 text-muted-foreground">
                Discover the best food spots near you
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {restaurants.length} restaurants available
              </span>
            </div>
          </div>

          {/* Restaurant Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-card py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Get your food delivered in under 30 minutes
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Best Quality
              </h3>
              <p className="text-muted-foreground">
                Only the freshest ingredients from top restaurants
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Easy Payment
              </h3>
              <p className="text-muted-foreground">
                Multiple payment options for your convenience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
