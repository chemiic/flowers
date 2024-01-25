"use client";

import Image from "next/image";
import Bag from "@/components/icons/bag/bag";
import {discountPrice, format} from "@/components/ui/card/utils";
import {useRouter} from "next/navigation";
import {FC, MouseEventHandler} from "react";
import {Product} from "@/types/types";

type ProductCardProps = {
 product: Product;
};

const Card:FC<ProductCardProps> = ({product}) => {
  const router = useRouter();
  // const cart = useCart();
  const handleClick = ():void =>{
    router.push(`/product/${product.id}`);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.stopPropagation();
    // cart.addProduct(product);
  };

  return (
    <div className={"relative group flex flex-col items-center justify-center w-full overflow-hidden"}>
      {!!product.discount && <div className={"absolute -right-2.5 -top-2.5 rounded-full bg-[--crystal]"}>
        <p className={"text-[--salad] text-xl text-center px-3.5 py-6"}>-{product.discount}%</p>
      </div>}
      <Image src={product.image} className={"object-cover rounded-sm group-hover:rounded-b-0 group-hover:rounded-t-sm hover:cursor-pointer"} alt={"Image"} width={432} height={432} onClick={handleClick}/>
      <div className={"flex flex-col items-center justify-center gap-y-1 py-4 px-2 w-full"}>
        <h3 className={"text-xl text-[--gray]"}>
          {product.name}
        </h3>
        <span>
          {product.label} 1 шт.
        </span>
        <div className={"flex items-center gap-x-3"}>
          <span>🡙 {product.height}мм</span>
          <span className={`text-[--gray] p-x-1 bg-[${product.color.hex}]`}>{product.color.label}</span>
        </div>
        <div className={"flex items-center gap-x-3"}>
          {!!product.discount ? <p className={"text-xl text-[--fur] line-through"}>{format(product.price.toString())}₽</p> : <p className={"text-2xl text-[--gray] font-medium"}>{format(product.price.toString())}₽</p>}
          {!!product.discount && <p className={"text-2xl text-[--gray] font-medium"}>{discountPrice(product.price, product.discount)}₽</p>}
          <button onClick={onAddToCart}>
            <Bag/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;