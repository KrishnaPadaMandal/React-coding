import { useState } from "react"
import Child from "./Child"


function Parent()
{
    const [c_data,setData] = useState('')
    const data = (pass_data)=>{

        console.log("pass_data",pass_data)
        setData(pass_data)

    }
    return(
        <>
        <h1>Data pass Parent :{c_data}:- </h1><br></br>
        <Child data={data}/>
        </>
    )

}
export default Parent