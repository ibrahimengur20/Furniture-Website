import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Products from "./components/products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Communication from "./components/communication";
import About from "./components/about";
import ProductsDetail from "./components/productsDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
      </>
    ),
  },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
  { path: "/communication", element: <Communication /> },
  { path: "/products/:id", element: <ProductsDetail /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;