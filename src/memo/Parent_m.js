import Child_m from "./Child_m"
import {useState}  from 'react'

function Parent_m()
{
    const [data,setData] = useState("")
    return (
        <>
        <h1>Parent Use Memo</h1>
        <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}}/>
        <Child_m/>
        </>
    )
}
export default Parent_m