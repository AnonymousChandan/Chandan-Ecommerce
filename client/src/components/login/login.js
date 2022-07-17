import { fetchData } from "../utility"
import { useState } from "react"

const Login=()=>{
    const [login,setLogin]=useState({userName:"",password:""})
    const handleLogin=()=>{
  fetchData("POST","user/login",false,{userName:login.userName,password:login.password}).then((res)=>{
            localStorage.setItem("authorization",res.data.authToken)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
        <div>
            <form>
            <div>
            <div>
                <label for="username">Username:</label>
                </div>
                <idv>
                <input type="text" id="username" onChange={(e)=>{setLogin({...login,userName:e.target.value})}}/>
                </idv>
                <div>
                    <label for="password">Password:</label>
                </div>
                <div>
                    <input type="password" id="password" onChange={(e)=>{setLogin({...login,password:e.target.value})}}/>
                </div>
            </div>
           <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
        </>
    )
}
export default Login