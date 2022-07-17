import {useNavigate} from "react-router-dom"
const Logout=()=>{
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.setItem("authorization","")
        navigate("/")
    }
    return(
        <>
            <button onClick={handleLogout}>Log-Out</button>
        </>
    )
}
export default Logout