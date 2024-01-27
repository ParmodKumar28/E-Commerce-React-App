// Parent component
// Imports
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import AddProductPage from "./Pages/AddProductPage";
import ProductPage from "./Pages/ProductPage";
import Page404 from "./Pages/Misc/Page404";
import CartPage from "./Pages/CartPage";

function App() {
  // Creating router here
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "add-product", element: <AddProductPage /> },
        { path: "products/:id", element: <ProductPage /> },
        { path: "cart", element: <CartPage /> },
      ],
    },
  ]);

  return (
    <>
      {/* Notifications Component */}
      <ToastContainer />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

// Exporting App
export default App;
