import { useState } from "react"
import { fetchData } from "../utility"
const Signup=()=>{
    const [signupState,setSignupState]=useState({})
    const signupData=[{attr:"username",type:"text",id:"username",label:"Username:"},{attr:"phone_number",type:"text",id:"phoneNumber",label:"Phone Number:"},{attr:"email",type:"email",id:"email",label:"Email:"},{attr:"password",type:"password",id:"password",label:"Password:"}]
    const handleUserAdd=()=>{
        console.log(signupState);
       fetchData("POST","user/signup",false,signupState).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleInputChange=(e,id)=>{
        // if(id==="phoneNumber"){
        //     e.target.value=parseInt(e.target.value)
        // }
        setSignupState({...signupState,[id]:e.target.value})
    }
    return (
        <>
        <div>
            <form>
                {signupData.map((formkey)=>{
                    return (
                        <div>
                            <div>
                                <label for={formkey.id}>{formkey.label}</label>
                            </div>
                            <div>
                                <input type={formkey.type} id={formkey.id} onChange={(e)=>{handleInputChange(e,formkey.id)}}/>
                            </div>
                        </div>
                    )
                })}
            </form>
            <button onClick={handleUserAdd}>SignUp</button>
        </div>
        </>
    )
}
export default Signup