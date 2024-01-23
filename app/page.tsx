import Image from "next/image";

import heroBG from '@/public/heroBG.png';
import Card from "@/components/ui/card/card";
import React from "react";
import Button from "@/components/ui/button/Button";

export default function Home() {


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
  return (
    <main className="flex justify-center flex-col items-center">
      <div className={`max-w-[1000px] w-full relative flex justify-center h-[900px]`}>
        <Image src={heroBG} alt={'No_error'} className={`w-full absolute lg:static`}/>
        <div className={`text-center absolute lg:top-[50%] lg:-translate-y-1/2 lg:left-[28%] max-w-[351px] font-light lg:text-2xl`}>
         <h2>
           Рады приветствовать вас <br/>
           в живом пространстве “Алиссум”
         </h2>
         <h2 className={`mt-6`}>
           У нас вы можете <br/>
           не только приобрести цветы, <br/>
           но и посетить мастер-классы.
         </h2>
        </div>
      </div>

      <div className={`flex flex-col px-[--pagePadding] my-[80px] gap-12 items-center`}>
        <h2 className={`uppercase text-4xl`}>Цветы</h2>
        <div className={" grid grid-cols-1 gap-x-[24px] gap-y-[55px] xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2"}>
          {flowers.map((flower, index) => (
            <Card key={index} {...flower} />
          ))}
        </div>
        <Button>Больще цветов</Button>
      </div>

      <div className={`max-w-[1200px] flex flex-col items-center`}>
        <h2 className={`uppercase text-4xl`}>Оформление</h2>
        <p className={`mt-[40px]`}>Оформление помещений растениями - это прекрасный способ придать интерьеру живую, природную нотку.
          Растения не только украшают помещение, но и очищают воздух, повышают уровень кислорода, улучшают настроение и способствуют расслаблению.</p>
        <p className={`mt-[20px]`}>Однако, чтобы растения не только выглядели красиво, но и хорошо себя чувствовали, нужно учитывать несколько важных факторов.
          Во-первых, необходимо выбрать правильные растения для данного помещения. Не все виды растений могут выжить внутри помещения,
          особенно если в нем мало естественного света. В таком случае, нужно выбирать растения, которые лучше всего растут в условиях комнатной
          температуры и не требуют большого количества света. Во-вторых, нужно правильно ухаживать за растениями: регулярно поливать, подкармливать,
          пересаживать, удалять сухие листья и т.д. Только в этом случае, растения будут радовать глаз и дарить полезные свойства для здоровья.</p>
        </div>
        <Button className={`mt-40`}>Подробнее</Button>
    </main>
  )
}
