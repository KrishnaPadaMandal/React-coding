import { createContext, useState } from "react"
import Child from "./Child"

export const myContext = createContext("")
function Parent()
{
    const [name,setName]=useState("")
    const [child_data,setChildData] = useState("")
    const handelData = (e)=>{
        e.preventDefault()
        console.log(" sent name",name)
        setChildData(name)
    }
    return (
        <myContext.Provider value={child_data}>
        <div>
            <form onSubmit={handelData}>
            <input type="text" value={name} placeholder="Enter the data from child" onChange={(e)=>setName(e.target.value)}/>
            <button type="Submit">Sent</button>
            </form>
            <Child/>
        </div>
        </myContext.Provider>
    )

}
export default Parent