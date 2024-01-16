import {NextPage} from "next";

interface ProductIdPageProps {
    params: {
        productId: string
    }
}


const ProductIdPage: NextPage<ProductIdPageProps> = async ({params}) => {
    // const product: Product = await getProduct(params.productId);

    return (
        <>asd</>
    );
};

export default ProductIdPage;