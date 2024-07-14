/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/features/products/productApi";
import { TProduct } from "@/types/products/productsType";
import { useState } from "react";
import ProductModal from "./ProductModal/ProductModal";
import DeleteConfirmation from "./DeleteConfirmation/DeleteConfirmation";

const ProductManagement = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery({});
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null); // Use Product interface
  const [actionType, setActionType] = useState<"none" | "edit" | "delete">(
    "none"
  );

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleCreate = () => {
    setSelectedProduct(null);
    setActionType("edit");
  };

  const handleEdit = (product: TProduct) => {
    setSelectedProduct(product);
    setActionType("edit");
  };

  const handleDelete = (product: TProduct) => {
    setSelectedProduct(product);
    setActionType("delete");
  };

  const confirmDelete = async () => {
    if (!selectedProduct) return;

    try {
      await deleteProduct(selectedProduct._id);
      setSelectedProduct(null);
      setActionType("none");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setActionType("none");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <button
        onClick={handleCreate}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add New Product
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.data.map((product: TProduct) => (
            <tr key={product._id}>
              <td className="py-2 px-4">
                {/* <img src={product.images} alt={product.name} className="w-16 h-16 object-cover"/> */}
                <p>img</p>
              </td>
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">{product.price}</td>
              <td className="py-2 px-4">{product.category}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {actionType === "edit" && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCancel}
          onSave={selectedProduct ? updateProduct : createProduct}
        />
      )}
      {actionType === "delete" && (
        <DeleteConfirmation
          product={selectedProduct}
          onConfirm={confirmDelete}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default ProductManagement;
