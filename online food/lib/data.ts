export interface Restaurant {
  id: number;
  name: string;
  location: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  image: string;
}

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Tandoor Tales",
    location: "Koramangala, Bangalore",
    rating: 4.5,
    cuisine: "North Indian, Mughlai",
    deliveryTime: "30-35 min",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Pizza Paradise",
    location: "Indiranagar, Bangalore",
    rating: 4.3,
    cuisine: "Italian, Pizza",
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Dragon Bowl",
    location: "HSR Layout, Bangalore",
    rating: 4.6,
    cuisine: "Chinese, Thai",
    deliveryTime: "35-40 min",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Burger Barn",
    location: "Whitefield, Bangalore",
    rating: 4.2,
    cuisine: "American, Fast Food",
    deliveryTime: "20-25 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "South Spice",
    location: "JP Nagar, Bangalore",
    rating: 4.7,
    cuisine: "South Indian, Kerala",
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Sushi Station",
    location: "MG Road, Bangalore",
    rating: 4.4,
    cuisine: "Japanese, Sushi",
    deliveryTime: "40-45 min",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
  },
];

export const menuItems: MenuItem[] = [
  // Tandoor Tales (id: 1)
  {
    id: 101,
    restaurantId: 1,
    name: "Butter Chicken",
    description: "Tender chicken in rich, creamy tomato gravy",
    price: 320,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 102,
    restaurantId: 1,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese with spices",
    price: 280,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 103,
    restaurantId: 1,
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in creamy gravy",
    price: 220,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 104,
    restaurantId: 1,
    name: "Garlic Naan",
    description: "Soft bread topped with garlic and butter",
    price: 60,
    category: "Breads",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    isVeg: true,
  },

  // Pizza Paradise (id: 2)
  {
    id: 201,
    restaurantId: 2,
    name: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and basil",
    price: 350,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 202,
    restaurantId: 2,
    name: "Pepperoni Pizza",
    description: "Loaded with spicy pepperoni slices",
    price: 420,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 203,
    restaurantId: 2,
    name: "Garlic Bread",
    description: "Crispy bread with garlic butter",
    price: 150,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 204,
    restaurantId: 2,
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ sauce with grilled chicken",
    price: 450,
    category: "Pizzas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    isVeg: false,
  },

  // Dragon Bowl (id: 3)
  {
    id: 301,
    restaurantId: 3,
    name: "Kung Pao Chicken",
    description: "Spicy stir-fried chicken with peanuts",
    price: 340,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 302,
    restaurantId: 3,
    name: "Veg Fried Rice",
    description: "Wok-tossed rice with vegetables",
    price: 220,
    category: "Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 303,
    restaurantId: 3,
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with vegetables",
    price: 180,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1606525437817-7692b36b9f9d?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 304,
    restaurantId: 3,
    name: "Thai Green Curry",
    description: "Aromatic curry with coconut milk",
    price: 360,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
    isVeg: true,
  },

  // Burger Barn (id: 4)
  {
    id: 401,
    restaurantId: 4,
    name: "Classic Cheeseburger",
    description: "Beef patty with cheddar cheese",
    price: 250,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 402,
    restaurantId: 4,
    name: "Crispy Chicken Burger",
    description: "Fried chicken with special sauce",
    price: 230,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 403,
    restaurantId: 4,
    name: "French Fries",
    description: "Golden crispy potato fries",
    price: 120,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 404,
    restaurantId: 4,
    name: "Veggie Delight Burger",
    description: "Grilled veggie patty with fresh toppings",
    price: 200,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
    isVeg: true,
  },

  // South Spice (id: 5)
  {
    id: 501,
    restaurantId: 5,
    name: "Masala Dosa",
    description: "Crispy crepe with spiced potato filling",
    price: 150,
    category: "Dosas",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 502,
    restaurantId: 5,
    name: "Idli Sambar",
    description: "Steamed rice cakes with lentil soup",
    price: 120,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 503,
    restaurantId: 5,
    name: "Kerala Fish Curry",
    description: "Tangy fish curry with coconut",
    price: 320,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 504,
    restaurantId: 5,
    name: "Medu Vada",
    description: "Crispy lentil donuts",
    price: 100,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop",
    isVeg: true,
  },

  // Sushi Station (id: 6)
  {
    id: 601,
    restaurantId: 6,
    name: "California Roll",
    description: "Crab, avocado, and cucumber roll",
    price: 450,
    category: "Sushi Rolls",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 602,
    restaurantId: 6,
    name: "Salmon Nigiri",
    description: "Fresh salmon on seasoned rice",
    price: 380,
    category: "Nigiri",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400&h=300&fit=crop",
    isVeg: false,
  },
  {
    id: 603,
    restaurantId: 6,
    name: "Vegetable Tempura",
    description: "Crispy battered vegetables",
    price: 280,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1581781870027-04212e231e96?w=400&h=300&fit=crop",
    isVeg: true,
  },
  {
    id: 604,
    restaurantId: 6,
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu",
    price: 150,
    category: "Soups",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    isVeg: true,
  },
];

export function getRestaurantById(id: number): Restaurant | undefined {
  return restaurants.find((r) => r.id === id);
}

export function getMenuByRestaurantId(restaurantId: number): MenuItem[] {
  return menuItems.filter((item) => item.restaurantId === restaurantId);
}
