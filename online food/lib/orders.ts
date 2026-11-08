import type { CartItem } from "@/context/cart-context";

export interface Order {
  id: string;
  user_id: string;
  items: CartItem[];
  subtotal: number;
  delivery_fee: number;
  taxes: number;
  total: number;
  status: string;
  created_at: string;
}

// Short, human-readable form of the order's UUID
export function formatOrderId(id: string) {
  return `#FE${id.replace(/-/g, "").slice(0, 8).toUpperCase()}`;
}
