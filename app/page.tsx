import Image from "next/image";
import Link from "next/link";
import {Product} from "@/types/types";

import Card from "@/components/ui/card/card";
import Button from "@/components/ui/button/Button";

import heroBg from '@/public/heroBg.png';
import decorationBg from '@/public/decorationBg.png';

export default function Home() {
  const flowers: Array<Product> = [
    {
      id:'1',
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
      id:'2',
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
      id:'3',
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
      id:'4',
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
      <div className={`max-w-[1000px] w-full flex items-center justify-center relative h-[914px]`}>
        <div className={`absolute lg:-right-11 top-0 bottom-0 w-full flex items-center justify-center 
        bg-no-repeat bg-[43%] lg:bg-[]
        md:blur-0 blur-sm
        `}
             style={{
               backgroundImage:`url(${heroBg.src})`
             }}></div>
        <div className={`text-center 
        max-w-[351px] font-light lg:text-2xl text-xl sm:-ml-[40px] lg:-ml-[0] sm:mr-0 mx-auto relative z-10`}>
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
        <h2 className={`text-4xl uppercase font-medium text-center text-[--gray]`}>Цветы</h2>
        <div className={" grid grid-cols-1 gap-x-[24px] gap-y-[55px] xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2"}>
          {flowers.map((flower) => (
            <Card product={flower} key={flower.id} />
          ))}
        </div>
        <Link href={`/flowers`} className={`block w-full max-w-[400px]`}><Button>Больще цветов</Button></Link>
      </div>

      <div className={`relative w-full`}>
        <div className={`max-w-[1200px] lg:w-[60vw] px-[--pagePadding] flex flex-col justify-center items-center my-[60px] mx-auto relative z-20 font-light`}>
          <h2 className={`text-4xl uppercase font-medium text-center text-[--gray]`}>Оформление</h2>
          <p className={`mt-[40px]`}>Оформление помещений растениями - это прекрасный способ придать интерьеру живую, природную нотку.
            Растения не только украшают помещение, но и очищают воздух, повышают уровень кислорода, улучшают настроение и способствуют расслаблению.</p>
          <p className={`mt-[20px]`}>Однако, чтобы растения не только выглядели красиво, но и хорошо себя чувствовали, нужно учитывать несколько важных факторов.
            Во-первых, необходимо выбрать правильные растения для данного помещения. Не все виды растений могут выжить внутри помещения,
            особенно если в нем мало естественного света. В таком случае, нужно выбирать растения, которые лучше всего растут в условиях комнатной
            температуры и не требуют большого количества света. Во-вторых, нужно правильно ухаживать за растениями: регулярно поливать, подкармливать,
            пересаживать, удалять сухие листья и т.д. Только в этом случае, растения будут радовать глаз и дарить полезные свойства для здоровья.</p>
          <Link href={`/spaceDesign`} className={`block w-full max-w-[400px]`}><Button className={`mt-40`}>Подробнее</Button></Link>
        </div>
        <Image src={decorationBg} alt={`noError`} className={`absolute right-0 bottom-0 z-10 lg:block blur lg:blur-0`}/>
      </div>
    </main>
  )
}
