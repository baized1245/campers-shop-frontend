/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, ReactNode } from "react";

type TDmodal = {
  isOpen: ReactNode | any;
  onClose: ReactNode | any;
  product: ReactNode | any;
  createProduct: ReactNode | any;
  updateProduct: ReactNode | any;
};

const ProductModal = ({
  isOpen,
  onClose,
  product,
  createProduct,
  updateProduct,
}: TDmodal) => {
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await updateProduct({ id: product._id, updatedProduct: formData });
      } else {
        await createProduct(formData);
      }
      onClose();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal-open" : "modal-closed"}`}>
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {product ? "Update Product" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
