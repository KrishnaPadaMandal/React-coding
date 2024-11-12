import { useMemo, useState } from "react"

function UseM()
{

    const [count,SetCount]=useState(0)
     useMemo(()=>{
            console.log("Rendering")    
        },[count])
    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>{SetCount(count+1)}}>Counter</button>
        
        </>
    )

}
export default UseM