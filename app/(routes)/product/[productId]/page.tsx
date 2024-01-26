import {NextPage} from "next";
import Gallery from "@/components/gallery/gallery";

interface ProductIdPageProps {
  params: {
    productId: string
  }
}


const ProductIdPage: NextPage<ProductIdPageProps> = async ({params}) => {
  // const product: Product = await getProduct(params.productId);
  const product = {
      id:'1',
      images: ['/image.png', '/image.png','/image.png','/image.png','/image.png'  ],
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


  return (
    <main>
      <div className={`max-w-[1200px]`}>
        <Gallery images={product.images}/>
      </div>
    </main>
  );
};

export default ProductIdPage;