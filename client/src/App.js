import Signup from "./components/signup/signup"
import Login from "./components/login/login"
import Logout from "./components/logout/logout"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Order from "./components/orders/order"
import Protected from "./protected/protected"
import Item from "./components/item-list/item"
import Cart from "./components/cart/cart"
const App=()=>{
  return(
    <>
      Ecommerce App
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="/item" element={<Item/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/order" element={<Protected><Order/></Protected>}></Route>
         
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App