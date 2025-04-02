import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout"

import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import FilterSidebar from "./pages/FilterSidebar";
import ProductDetails from "./components/Products/ProductDetails";
import CheckOut from "./pages/CheckOut";
import Payment from "./pages/Payment";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrderPage from "./pages/MyOrderPage";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import ShopMangenement from "./components/Admin/ShopMangenement";
import OrderManagemenet from "./components/Admin/OrderManagemenet";
import EditProductPage from "./components/Admin/EditProductPage";



function App() {
  const router = createBrowserRouter([
    //user
    {
      path: "/", element: <UserLayout /> ,
      children:[
        {path:"/", element:<Home/>},
        {path:"/profile", element:<Profile/>},
        {path:"/collections/:collection", element:<CollectionPage/>},
        {path:"/filterSidebar", element:<FilterSidebar/>},
        {path:"/product/:id", element:<ProductDetails/>},
        {path:"/checkout", element:<CheckOut/>},
        {path:"/payment", element:<Payment/>},
        {path:"/order-confirmation", element:<OrderConfirmationPage/>},
        {path:"/order-confirmation", element:<OrderConfirmationPage/>},
        {path:"/my-orders", element:<MyOrderPage/>},
        {path:"/order/:id", element:<OrderDetailsPage/>},
      ]
      
    },  {
      path:"/admin", element:<AdminLayout/>,
children:[
  {path: "" , element:<AdminHomePage/>},
  {path:"users",element:<UserManagement/>},
  {path:"products",element:<ProductManagement/>},
  {path:"products/:id/edit",element:<EditProductPage/>},
  {path:"orders",element:<OrderManagemenet/>},
  {path:"shops",element:<ShopMangenement/>},
]
    },

   
    {path:"/login", element:<Login/>},
    {path:"/register", element:<Register/>},
   
  ])
  

  return (
    <>
    <ToastContainer />
    <RouterProvider router={router} />
    </>
   
  )
}

export default App
