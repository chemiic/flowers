'use client'
import React, {FC, MouseEventHandler, useState} from "react";
import Button from "@/components/ui/button/Button";
import useCart from "@/hooks/use-cart";
import {Product} from "@/types/types";
import Price from "@/components/ui/Price";
import Plus from "@/components/icons/plus/plus";
import Minus from "@/components/icons/minus/minus";


interface ProductAddToCartFormProps {
  product: Product;
}
const ProductAddToCartForm:FC<ProductAddToCartFormProps> = ({product}) => {
  const cart = useCart()
  const [count, setCount] = useState(1)

  const onPlusCLickHandle = () => {
    setCount(count=> count + 1)
  }
  const onMinusCLickHandle = () => {
    if(count !== 1){
      setCount(count=> count - 1)
    }
  }
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.stopPropagation();
    cart.addProduct(product);
  };

  return(
    <div className={` flex flex-col gap-6`}>
      <h3 className={`text-[32px] font-medium`}>{product.name}</h3>
      <Price price={product.price} discount={product.discount} />
      <div className={`flex items-center justify-between border-[--crystal] border px-[20px] py-[10px] max-w-[400px] w-full`}>
        <div onClick={onPlusCLickHandle} className={`cursor-pointer h-[40px] flex items-center`}>
          <Plus/>
        </div>
        <p className={`text-2xl pointer-events-none select-none`}>{count}</p>
        <div onClick={onMinusCLickHandle} className={`cursor-pointer h-[40px] flex items-center`}>
          <Minus/>
        </div>
      </div>
      <Button className={`select-none`} onClick={onAddToCart}>В корзину</Button>
    </div>
  )
}
export default ProductAddToCartForm