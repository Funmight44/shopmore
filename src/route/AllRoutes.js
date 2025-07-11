import { Route, Routes } from "react-router-dom";
import CartList from "../pages/cartList";
import Hero from "../pages/hero";
import MenCategory from "../pages/men-category";
import FemaleCategory from "../pages/female-category";
import ProductDetail from "../pages/productDetail";
import OrderPage from "../pages/order/orderPage";
import AllProducts from "../pages/allProducts";
import SearchProduct from "../pages/searchProduct";
import Kids from "../pages/kids";



const AllRoutes = () => {
    
    return ( 
        <main>
        <Routes>
            <Route path="/"  element={<Hero/>}  />
            <Route path="cart" element={<CartList/>} />
            <Route path="men" element={<MenCategory/>} />
            <Route path="women" element={<FemaleCategory/>} />
            <Route path="kids" element={<Kids/>} />
            <Route path="/products/:category/:id" element={<ProductDetail />} />
            <Route path="/order"  element={<OrderPage/>}/>
            <Route path="/allProducts"  element={<AllProducts/>}/>
            <Route path="/search" element= {<SearchProduct/>} />
        </Routes>
        </main>
     );
}
 
export default AllRoutes;