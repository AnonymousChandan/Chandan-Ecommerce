import axios from "axios"
import { useEffect, useState } from "react"
import "./item.css"
const Item=()=>{
    const [items,setItem]=useState([])
    useEffect(()=>{
        axios({
            url:"https://ecommercebadar-server.herokuapp.com//item",
            method:"GET"
        }).then((itemdata)=>{
            setItem(itemdata.data.item)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    const handleCart=(item)=>{
        console.log(item)
      const payload={
        itemid : item.item_id
      }
      const authToken=localStorage.getItem("authorization")
      fetch("https://ecommercebadar-server.herokuapp.com//cart/add",{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            authorization:authToken,
            "Content-Type" :"application/json"
        }
      }).then((data)=>data.json()).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log(err)
      })
    }
    const handleBuy=()=>{

    }
    return (
        <>
     
        <div className="container">
        {items.map((item)=>{
            return(
                <div className="card-item">
                <div className="item-heading">
                {item.item_name}
                </div>
                <div className="item-actual-price">
                {item.actual_prize}
                <div/>
                <div className="discounted-price">
                {item.discounted_prize}
                </div>
                <button type="button" onClick={()=>{handleCart(item)}}>Add to cart</button>
                <button type="button" onClick={handleBuy}>Buy Now</button>
                </div>
            </div>
            )
        })}
           
        </div>
        </>
    )
}
export default Item