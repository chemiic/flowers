'use client'
import {discountPrice, format} from "@/components/ui/card/utils";
import {FC, useEffect, useState} from "react";

interface PriceProps {
  price: number;
  discount: number;
}
const Price: FC<PriceProps> = ({price, discount}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return(
    <div className={`flex items-center gap-2`}>
      {!!discount ? <p className={"text-xl text-[--fur] line-through"}>{format(price.toString())}₽</p> : <p className={"text-2xl text-[--gray] font-medium"}>{format(price.toString())}₽</p>}
      {!!discount && <p className={"text-2xl text-[--gray] font-medium"}>{discountPrice(price, discount)}₽</p>}
    </div>
  )
}
export default Price
