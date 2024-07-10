import React from "react";

interface Category {
  name: string;
  image: string;
}

const categories: Category[] = [
  {
    name: "Tents",
    image:
      "https://img.freepik.com/free-photo/tents-glamping_1268-20681.jpg?ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
  },
  {
    name: "Backpacks",
    image:
      "https://img.freepik.com/free-photo/travelers-backpacks-shoes_1150-14775.jpg?ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
  },
  {
    name: "Cooking Gear",
    image:
      "https://img.freepik.com/free-vector/pack-colored-chef-items_23-2147630264.jpg?uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
  },
  {
    name: "Sleeping Bags",
    image:
      "https://img.freepik.com/premium-photo/camping-dreams-sleeping-bags-adventureslee-camping-photo_1032986-7061.jpg?uid=R110489875&ga=GA1.1.1162881527.1690013272&semt=ais_hybrid",
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="my-3">
      <h2 className="text-primary text-2xl font-semibold text-center mb-3">
        Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="text-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover mb-2 rounded-lg shadow-md"
            />
            <p className="text-base font-base">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
