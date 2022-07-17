import axios from "axios"

export const fetchData=(methodType,endpoint,isAuthToken,payload="")=>{
    const defaultUrl="https://ecommerce-badar-server.herokuapp.com"
    const authToken=localStorage.getItem("authorization")
    let headers={}
    if(isAuthToken){
        headers["authorization"]=authToken
    }
   return axios({
        url:`${defaultUrl}/${endpoint}`,
        method:methodType,
        headers:headers,
        data:payload
    })
}