import { useState } from "react"

function ConditionalRend()
{
    const [isLogin,setLogin] = useState(false)
    let button

    if(!isLogin)
    {
        button = <button  style={{backgroundColor:"f2923c", border:"3px", borderRadius:"10px", width:"100px", padding:"30px", cursor:"pointer"}} onClick={()=>{setLogin(true)}}>Logout</button>
    }
    
    else {
        button = <button style={{backgroundColor:"f2923c", border:"3px", borderRadius:"10px", width:"100px", padding:"30px",cursor:"pointer"}} onClick={()=>{setLogin(false)}}>Login</button>
    }
    console.log("LL",isLogin)
    return(
        <div style={{ width:"400px", marginTop:"400px", padding:"20px",border:"2px solid", backgroundColor:"#738df1",borderRadius:"5px"}}>
            <h1 style={{backgroundColor:"f2923c", border:"3px", borderRadius:"10px", width:"100px", padding:"30px"}}>{isLogin ? "Go to Login":"Welcome"}</h1>
           {button}
        </div>
    )

}
export default ConditionalRend