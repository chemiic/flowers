"use client";

import Image from "next/image";
import Bag from "@/components/icons/bag/bag";
import {discountPrice, format} from "@/components/ui/card/utils";

type props = {
  image: string,
  discount: number,
  name: string,
  label: string,
  height: number,
  color: {
    label: string,
    hex: string,
  },
  price: number,
};

const Card = ({price, height, image, color, discount, label, name}: props) => {
  return (
    <div className={"relative group flex flex-col items-center justify-center w-full overflow-hidden"}>
      {!!discount && <div className={"absolute -right-2.5 -top-2.5 rounded-full bg-[--crystal]"}>
        <p className={"text-[--salad] text-xl text-center px-3.5 py-6"}>-{discount}%</p>
      </div>}
      <Image src={image} className={"object-cover rounded-sm group-hover:rounded-b-0 group-hover:rounded-t-sm"} alt={"Image"} width={432} height={432} />
      <div className={"flex flex-col items-center justify-center gap-y-1 py-4 px-2 w-full"}>
        <h3 className={"text-xl text-[--gray]"}>
          {name}
        </h3>
        <span>
          {label} 1 шт.
        </span>
        <div className={"flex items-center gap-x-3"}>
          <span>🡙 {height}мм</span>
          <span className={`text-[--gray] p-x-1 bg-[${color.hex}]`}>{color.label}</span>
        </div>
        <div className={"flex items-center gap-x-3"}>
          {!!discount ? <p className={"text-xl text-[--fur] line-through"}>{format(price.toString())}₽</p> : <p className={"text-2xl text-[--gray] font-medium"}>{format(price.toString())}₽</p>}
          {!!discount && <p className={"text-2xl text-[--gray] font-medium"}>{discountPrice({price, discount})}₽</p>}
          <Bag />
        </div>
      </div>
    </div>
  );
};

export default Card;