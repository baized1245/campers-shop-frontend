import App from "@/App";
import AboutUs from "@/components/pages/about us/AboutUs";
import CartPage from "@/components/pages/cart/CartPage";
import ProductsPage from "@/components/pages/products/ProductsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
