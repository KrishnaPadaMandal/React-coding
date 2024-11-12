import { useCallback, useState } from "react"
import Child_C from "./Child_C"

function Parent_C()
{
    const [name,SetName] = useState('')
    const handelData = (e)=>{
        e.preventDefault()
    SetName(e.target.value)
    }
    const data = useCallback(
        ()=>{
            console.log("Use Call Back From Parent")
            return 3
        },[]
    )
    return (
        <>
        <h1>Parent Data of UseCall Back</h1>
        <input type="Text" value={name} onChange={handelData}/>
        <Child_C data={data}/>
        </>
    )

}
export default Parent_C
