"use client";

import { useCart } from "./CartProvider";
import { money } from "@/lib/products";

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, close, setQty, remove } = useCart();

  return (
    <>
      {/* Scrim */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[70] h-dvh w-[90vw] max-w-md bg-[var(--color-surface)] border-l hairline flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b hairline">
          <h2 className="text-xl">Your bag ({count})</h2>
          <button
            onClick={close}
            aria-label="Close cart"
            className="grid place-items-center h-10 w-10 rounded-lg hover:bg-white/5 text-[var(--color-muted)] hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 grid place-items-center text-center px-8">
            <div>
              <p className="text-[var(--color-muted)]">Your bag is empty.</p>
              <button onClick={close} className="btn btn-ghost mt-5">
                Keep shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-16 object-cover rounded-md border hairline"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug line-clamp-2">
                      {item.title}
                    </p>
                    <p className="price text-sm text-[var(--color-muted)] mt-1">
                      {money(item.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border hairline rounded-md">
                        <button
                          onClick={() => setQty(item.id, item.qty - 1)}
                          aria-label="Decrease quantity"
                          className="h-7 w-7 grid place-items-center hover:text-white text-[var(--color-muted)]"
                        >
                          −
                        </button>
                        <span className="price w-7 text-center text-sm">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => setQty(item.id, item.qty + 1)}
                          aria-label="Increase quantity"
                          className="h-7 w-7 grid place-items-center hover:text-white text-[var(--color-muted)]"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-xs text-[var(--color-muted)] hover:text-[var(--color-hot)] uppercase tracking-wide"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <span className="price text-sm">
                    {money(item.price * item.qty)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t hairline p-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--color-muted)]">Subtotal</span>
                <span className="price font-display text-xl">
                  {money(subtotal)}
                </span>
              </div>
              <p className="text-xs text-[var(--color-acid)]">
                You&apos;ll earn {Math.round(subtotal)} Rain Rewards points
              </p>
              <button className="btn btn-primary w-full">
                Checkout
              </button>
              <p className="text-center text-[10px] text-[var(--color-muted)]">
                Demo checkout. Shipping &amp; taxes calculated at the real one.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
