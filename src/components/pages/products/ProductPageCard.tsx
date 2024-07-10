/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types/products/productsType";
import { Link } from "react-router-dom";

const ProductPageCard = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <Link to={`/products/${product?._id}`}>
        <div>
          <div className="card card-compact bg-base-100 w-auto shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p>price:{product.price}</p>
              <p>category: {product.category}</p>
              <p>ratings: {product.ratings}</p>
              <p>stock: {product.stock}</p>
              <div className="card-actions justify-end">
                <Button className="rounded-xl">Buy now</Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductPageCard;
