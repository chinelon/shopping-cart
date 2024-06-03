import App from "./App";
import Cart from "./components/Cart";
//import ErrorPage from "./components/ErrorPage";
//import { element } from "prop-types";
import Products from "./components/Products";
import Shop from "./components/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
   // errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/product/:id",
    element: <Products />,
    children: [
      {
        path: "cart",
        element: <Cart />
      }
    ]
  }
];

export default routes;
