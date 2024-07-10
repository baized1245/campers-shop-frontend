import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RecommendedProducts = () => {
  return (
    <>
      <h1 className="text-primary text-2xl font-semibold text-center mb-3">
        Recommended products for you..
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {/* //Card 1 */}
        <div className="card card-compact bg-base-100 w-auto shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Button className="rounded-xl">Buy now</Button>
            </div>
          </div>
        </div>
        {/* //Card 2 */}
        <div className="card card-compact bg-base-100 w-auto shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Button className="rounded-xl">Buy now</Button>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card card-compact bg-base-100 w-auto shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Button className="rounded-xl">Buy now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <Link to="products">
          <Button className="rounded-xl text-primary" variant="outline">
            View more.
          </Button>
        </Link>
      </div>
    </>
  );
};

export default RecommendedProducts;
