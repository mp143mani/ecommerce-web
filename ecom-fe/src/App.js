import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Policy from "./components/pages/Policy";
import Pagenotfound from "./components/pages/Pagenotfound";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/user/Dashboard";
import PrivateRoute from "./components/user/Private";
import ForgotPasssword from "./components/Auth/ForgotPasssword";
import AdminRoute from "./components/Admin/AdminRoute";
import AdminDashboard from "./components/Admin/AdminDashboard";
import CreateCategory from "./components/Admin/CreateCategory";
import CreateProduct from "./components/Admin/CreateProduct";
import Users from "./components/Admin/Users";
import Orders from "./components/user/Orders";
import Profile from "./components/user/Profile";
import Products from "./components/Admin/Products";
import UpdateProduct from "./components/Admin/UpdateProduct";
import Search from "./components/pages/Search";
import ProductDetails from "./components/pages/ProductDetails";
import Categories from "./components/pages/Categories";
import CategoryProduct from "./components/pages/CategoryProduct";
import CartPage from "./components/pages/CartPage";
import AdminOrders from "./components/Admin/AdminOrders";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
