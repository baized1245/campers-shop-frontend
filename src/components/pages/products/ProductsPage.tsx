import { useGetProductsQuery } from "@/redux/features/products/productApi";
import ProductPageCard from "./ProductPageCard";
import { TProduct } from "@/types/products/productsType";

const ProductsPage = () => {
  const { data: products, isLoading } = useGetProductsQuery({});
  // console.log(products);
  if (isLoading)
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );

  return (
    <div className=" mx-auto">
      <div className="grid md:grid-cols-4  grid-cols-3 sm:grid-cols-1 gap-4 mx-auto my-5">
        {products?.data?.map((product: TProduct) => (
          <ProductPageCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
