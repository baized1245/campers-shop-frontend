/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/features/products/productApi";

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: products, isLoading } = useGetSingleProductQuery(id);

  console.log(products);
  //   console.log({ data });

  if (isLoading)
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card card-compact bg-base-100 w-auto shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{products?.data?.name}</h2>
          <p>{products?.data?.description}</p>
          <p>price:{products?.data?.price}</p>
          <p>category: {products?.data?.category}</p>
          <p>ratings: {products?.data?.ratings}</p>
          <p>stock: {products?.data?.stock}</p>
          <div className="card-actions justify-end">
            <Button className="rounded-xl">Buy now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
