"use client";

import React from 'react';
import Pagination from "@/components/ui/pagination";
import InputCheckbox from "@/components/ui/input/input-checkbox";
import {Breadcrumb} from "@/components/ui/bread-crumb/bread-crumb";
import Select from "@/components/ui/select/select";
import {sortValues} from "@/utils/constants";
import Card from "@/components/ui/card/card";

const Page = () => {
  const f_types: string[] = ["Букеты", "Цветы поштучно"];
  const f_flowers: string[] = ["Пион", "Ранункулюс", "Амариллис"];
  const f_colors: { label: string, hex: string }[] = [
    {
      label: "Кремовый",
      hex: "#FFE9E5"
    },
    {
      label: "Розовый",
      hex: "#FFD3E3"
    }
  ];
  const f_packages: string[] = ["Крафт бумага", "Ленты", "Плёнка"];

  const flowers = [
    {
      image: "/image.png",
      discount: 16,
      name: "Вьюнок 001",
      label: "Вьюнок куст",
      height: 350,
      color: {
        label: "Розовый",
        hex: "#FFD3E3",
      },
      price: 7990,
    },
    {
      image: "/image.png",
      discount: 0,
      name: "Розы 006",
      label: "Роза кустовая например",
      height: 350,
      color: {
        label: "Кремовый",
        hex: "#FFE9E5",
      },
      price: 200,
    },
    {
      image: "/image.png",
      discount: 0,
      name: "Тюльпан 014",
      label: "Тюльпан",
      height: 350,
      color: {
        label: "Розовый",
        hex: "#FFD3E3",
      },
      price: 7000,
    },
  ];

  const onApply = (): void => {
    console.log("Apply")
  };

  const onReset = (): void => {
    console.log("Reset")
  };

  return (
    <main>
      <Breadcrumb />
      <h1 className={"flex justify-center text-4xl text-[--gray] pt-[60px]"}>
        Цветы
      </h1>
      <section className={"flex justify-between gap-[40px]"}>
        <div className={"flex flex-col gap-y-4"}>
          {/* filters */}
          {/* f-type */}
          <div className={"flex flex-col gap-y-2"}>
            <h3 className={"text-xl text-[--fur]"}>
              Тип
            </h3>
            {f_types.map((type, index) => (
              <InputCheckbox key={index} id={type} label={type} name={"type"}/>
            ))}
          </div>
          {/* f-flowers */}
          <div className={"flex flex-col gap-y-2"}>
            <h3 className={"text-xl text-[--fur]"}>
              Цветы
            </h3>
            {f_flowers.map((flower, index) => (
              <InputCheckbox key={index} id={flower} label={flower} name={"flower"}/>
            ))}
          </div>
          {/* f_price */}

          {/* f_color */}
          <div className={"flex flex-col gap-y-2"}>
            <h3 className={"text-xl text-[--fur]"}>
              Цвет
            </h3>
            {f_colors.map((color, index) => (
              <InputCheckbox key={index} id={color.label} label={color.label} name={"color"} color={color.hex}/>
            ))}
          </div>
          {/* package */}
          <div className={"flex flex-col gap-y-2"}>
            <h3 className={"text-xl text-[--fur]"}>
              Упаковка
            </h3>
            {f_packages.map((item, index) => (
              <InputCheckbox key={index} id={item} label={item} name={"package"}/>
            ))}
          </div>
          <div className={"flex flex-col gap-y-[24px] pt-[30px]"}>
            <button
              className={"w-full text-xl text-[--salad] border-2 border-[--salad] py-1"}
              onClick={onApply}
              type={"button"}
            >
              Применить
            </button>
            <button
              className={"w-full text-xl text-[--salad] border-2 border-[--salad] py-1"}
              onClick={onReset}
              type={"button"}
            >
              Сбросить все
            </button>
          </div>
        </div>
        <div className={"flex flex-col gap-y-[40px]"}>
          {/* flowers */}
           <div className={"flex items-center gap-x-[24px]"}>
              <h3 className={"text-xl text-[--fur]"}>
                Сортировка
              </h3>
              <Select name={"sort_type"} values={sortValues} />
           </div>
          <div className={"grid grid-cols-3 gap-x-[24px] gap-y-[55px]"}>
            {flowers.map((flower, index) => (
              <Card key={index} {...flower} />
            ))}
          </div>
        </div>
      </section>
      <div className={"flex justify-center pt-[60px]"}>
        <Pagination pages={[1, 2, 3]} />
      </div>
    </main>
  );
};

export default Page;