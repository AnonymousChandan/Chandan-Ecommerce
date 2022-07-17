
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Cart=()=>{
    const [cartData,setCartData]=useState([])
    const authToken=localStorage.getItem("authorization")
    useEffect(()=>{
        fetch("https://ecommercebadar-server.herokuapp.com/cart",{
            headers:{
                authorization:authToken
            }
        }).then((res)=>res.json()).then((data)=>{
            setCartData(data.cart)
        })
    },[])
   
    return(
        <>
        {
            authToken.length?<section>
                cart {cartData.length}
            </section>:<section>
                <div>User not logged in please login and signup</div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </section>
        }
        
        
        </>
    )
}
export default Cart