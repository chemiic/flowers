"use client";

import {type FC} from 'react';
import {Product} from "@/types/types";
import useCart from "@/hooks/use-cart";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Price from "@/components/ui/Price";
import Cross from "@/components/icons/cross/cross";

interface CardProductProps {
  product: Product;
}

const CartProduct: FC<CardProductProps> = ({product}) => {
  const cart = useCart();
  const router = useRouter();

  const onRemove = (): void => {
    cart.removeProduct(product.id);
  };

  return (
    <li className="flex py-6 border-b sm:flex-row flex-col gap-6 sm:gap-0">
      <div className="relative mx-auto h-[280px] w-[280px] rounded-md overflow-hidden sm:mx-0 sm:h-48 sm:w-48">
        <Image
          onClick={() => router.push(`/product/${product.id}`)}
          src={product.images[0]}
          alt="Image"
          sizes={"(max-width: 768px) 300px, (max-width: 1200px) 300px, 300px"}
          fill
          className="object-cover object-center cursor-pointer" />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <div onClick={onRemove} className={`max-w-[30px] cursor-pointer`} >
            <Cross/>
          </div>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">
              {product.name}
            </p>
          </div>
          <div className="mt-1 flex gap-x-3 text-sm">
            <p className="text-gray-500">
              {product.label}
            </p>
            <p className="text-gray-500 ,l-4 border-l border-gray-200 pl-4">
              {product.label}
            </p>
            <p className="text-gray-500 ,l-4 border-l border-gray-200 pl-4">
              {product.label}
            </p>
          </div>
          <Price price={product.price} discount={product.discount} />
        </div>
      </div>
    </li>
  );
};

export default CartProduct;