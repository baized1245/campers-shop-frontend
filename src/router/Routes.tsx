import App from "@/App";
import HomePage from "@/components/home/home/HomePage";
import AboutUs from "@/components/pages/about us/AboutUs";
import CartPage from "@/components/pages/cart/CartPage";
import ProductDetails from "@/components/pages/product details/ProductDetails";
import { ProductModal } from "@/components/pages/product management/addProduct/AddProducts";
import ProductManagement from "@/components/pages/product management/ProductManagement";
import ProductsPage from "@/components/pages/products/ProductsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/addproducts",
        element: (
          <ProductModal
            product={{
              _id: "",
              name: "",
              price: 0,
              stock: 0,
              description: "",
              category: "",
              ratings: 0,
              images: "",
            }}
          />
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/productManagement",
        element: <ProductManagement />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
