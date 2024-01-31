import {NextPage} from "next";
import Gallery from "@/components/gallery/gallery";
import Card from "@/components/ui/card/card";
import {Product} from "@/types/types";
import Image from "next/image";

import recomendation from '@/public/recomendation.png';
import {discountPrice, format} from "@/components/ui/card/utils";
interface ProductIdPageProps {
  params: {
    productId: string
  }
}


const ProductIdPage: NextPage<ProductIdPageProps> = async ({params}) => {
  // const product: Product = await getProduct(params.productId);
  const product = {
    id:'1',
    images: ['/image.png', '/image.png','/image.png','/image.png',  ],
    discount: 16,
    name: "Вьюнок 001",
    label: "Вьюнок куст",
    height: 350,
    color: {
      label: "Розовый",
      hex: "#FFD3E3",
    },
    price: 7990,
  }
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
    <main>
      <div className={`px-[--pagePadding]`}>
        <h2 className={`text-4xl uppercase font-medium text-center text-[--gray] mt-[60px]`}>Цветы</h2>
        <div className={`flex mt-[40px]`}>
          <Gallery images={product.images}/>
          <div className={`ml-[40px] `}>
            <h3 className={`text-[32px] font-medium`}>{product.name}</h3>
            <div className={`flex items-center gap-2`}>
              {!!product.discount ? <p className={"text-xl text-[--fur] line-through"}>{format(product.price.toString())}₽</p> : <p className={"text-2xl text-[--gray] font-medium"}>{format(product.price.toString())}₽</p>}
              {!!product.discount && <p className={"text-2xl text-[--gray] font-medium"}>{discountPrice(product.price, product.discount)}₽</p>}
            </div>

          </div>
        </div>
        <div className="flex flex-col my-[80px] gap-12 items-center">
          <h2 className={`text-4xl uppercase font-medium text-center text-[--gray]`}>Вы недавно смотрели</h2>
          <div className={" grid grid-cols-1 gap-x-[24px] gap-y-[55px] xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2"}>
            {flowers.map((flower) => (
              <Card product={flower} key={flower.id} />
            ))}
          </div>
        </div>
      </div>

      <div className={`px-[20px] xl:px-0`}>
        <h2 className={`text-4xl uppercase font-medium text-center text-[--gray]`}>Рекомендации по поддержанию свежести</h2>
        <div className={`flex mt-[40px] pr-[--pagePadding] relative`}>
          <Image src={recomendation} alt={`NoError`} className={`h-full w-[35vw] hidden xl:block`}/>
          <p className={`xl:ml-[40px] mb-[40px] font-light relative z-10`}>Перед тем, как поставить цветок в воду, обрежьте 2-3 см стебля под углом 45 градусов острым ножом или секатором, чтобы увеличить площадь поглощения стеблем воды. Подрезайте стебли при каждой замене воды – это обеспечит нормальное питание растения. Ежедневно меняйте воду, чтобы препятствовать образованию патогенной микрофлоры. Вместе с заменой воды обязательно мойте вазу с антибактериальным моющим средством.
            <br/>Найдите для вазы с цветами подходящее место. Оно должно быть прохладным с притоком свежего воздуха, подальше от отопительных приборов, сквозняков и прямых солнечных лучей. Не желательно ставить цветы вблизи фруктов и овощей.
            <br/>Доливайте в вазу воду по мере её поглощения цветами и испарения в течение дня. Это особенно актуально в жару и в помещениях с сухим воздухом.
            <br/>Воды в ёмкости должно быть столько, чтобы треть стеблей была погружена в воду. Удаляйте из воды листья, а также увядшие части цветов – они провоцируют развитие бактерий, которые ускоряют порчу цветов. Используйте специальные добавки, продлевающие жизнь растений. Не используйте сахар и другие народные средства!
            <br/>Следите за количеством воды в вазе, многие цветы, например тюльпаны и пионы, потребляют ее в больших объемах. Если стебли цветов помещены во флористическую губку, раз в 1-2 дня следует в нее добавлять воду, чтобы сохранять её влажной.
            <br/>Если в букете или композиции есть цветы на флористических удлинителях, нужно добавлять в них воду по мере поглощения воды растением. Для декоративных элементов на деревянных удлинителях и коротких веток зелени специальный уход и водное питание не требуются.
            <br/>Не рекомендуется надолго оставлять букеты без воды, оставлять букеты и композиции в автомобиле с неработающим двигателем на время более 5 минут (особенно в зимнее время и в жару), а также переносить живые цветы при температуре ниже +2 градусов без утепления.</p>

        </div>
      </div>
    </main>
  );
};

export default ProductIdPage;