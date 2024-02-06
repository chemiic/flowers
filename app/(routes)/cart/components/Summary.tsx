"use client";

import {FC} from "react";

import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/button/Button";
const Summary: FC = () => {
  const products = useCart((state) => state.products);


  const totalPrice: number = products.reduce((total, product) => {
    if (product.discount){
      return total + Number((product.price - product.price * product.discount / 100).toFixed(0))
    } else {
      return total + Number(product.price)
    }
  }, 0);


  return (
    <div
      className="mt-16 rounded-lg bg-[--crystal] px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 text-2xl">
      <h2 className="text-2xl font-medium text-gray-900">
        Стоимость заказа
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-xl font-medium text-gray-900">Итог</div>
          {totalPrice}
        </div>
      </div>
      <Button disabled={products.length === 0} className="w-full mt-6 font-medium mx-auto">
        Заказать
      </Button>
    </div>
  );
}

export default Summary;