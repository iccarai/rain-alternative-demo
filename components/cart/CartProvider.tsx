"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  handle: string;
  qty: number;
};

type AddInput = Omit<CartItem, "qty">;

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: AddInput) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "rain-cart";

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, []);

  // Persist on change (immutable updates only).
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = useCallback((item: AddInput) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((id: number) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const setQty = useCallback((id: number, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((p) => p.id !== id)
        : prev.map((p) => (p.id === id ? { ...p, qty } : p))
    );
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, p) => n + p.qty, 0);
    const subtotal = items.reduce((n, p) => n + p.qty * p.price, 0);
    return {
      items,
      count,
      subtotal,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      remove,
      setQty,
    };
  }, [items, isOpen, add, remove, setQty]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
