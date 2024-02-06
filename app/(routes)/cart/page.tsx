"use client";

import {NextPage} from "next";
import {useEffect, useState} from "react";
import useCart from "@/hooks/use-cart";
import CartProduct from "@/app/(routes)/cart/components/CartProduct";
import Summary from "@/app/(routes)/cart/components/Summary";

const CartPage: NextPage = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Корзина</h1>
      <div className="mt-12 lg:grid-cols-12 lg:items-start gap-x-12">
        <div className="lg6:col-span-7">
          {cart.products.length === 0 && <p className="text-neutral-500 text-center py-10">Корзина пуста</p>}
          <ul className="">
            {cart.products.map(product => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <Summary/>
      </div>
    </div>
  );
};

export default CartPage;