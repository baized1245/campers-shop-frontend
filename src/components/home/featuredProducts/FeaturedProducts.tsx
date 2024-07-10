// src/components/FeaturedProducts.tsx
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Luxury Tent",
    image:
      "https://img.freepik.com/free-photo/modern-glamping-by-lake_73899-13449.jpg?uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
    price: 299.99,
  },
  {
    id: 2,
    name: "Premium Backpack",
    image:
      "https://img.freepik.com/premium-photo/adventure-backpack-white-background_1111059-11865.jpg?uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
    price: 199.99,
  },
  {
    id: 3,
    name: "Advanced Camping Stove",
    image:
      "https://img.freepik.com/free-photo/smiling-girl-grilling-sausages-portable-barbecue-outdoors_23-2147840871.jpg?uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
    price: 129.99,
  },
  {
    id: 4,
    name: "Comfortable Sleeping Bag",
    image:
      "https://img.freepik.com/premium-photo/magnificent-sleeping-bags-isolated-white-background_787273-20053.jpg?uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
    price: 89.99,
  },
];

const FeaturedProducts: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="my-3">
      <h2 className="text-2xl font-semibold text-primary text-center mb-3">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2 rounded-lg shadow-md"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
            <Button
              onClick={() => handleViewDetails(product.id)}
              className="rounded-xl text-primary"
              variant="outline"
            >
              View more.
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
