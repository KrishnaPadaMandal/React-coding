import { useReducer } from "react"



function UseRed()
{
    const reducer = (count,action)=>{
        console.log("Count",count)
        console.log("Action",action)


        switch(action)
        {
            case "increment":
                return {value:count.value+1}
            case "decrement":
                return {value:count.value-1}
            default:
                return count
        }

    }
    const initial_value ={value:0}
    
const [count,dispatch] = useReducer(reducer,initial_value)

const updatedCount = (type)=>{
    dispatch(type)
}

return (
   <div>
    <h1>Counter {count.value}</h1>
    <button onClick={()=>updatedCount("increment")}>increment</button>
    <button onClick={()=>updatedCount("decrement")}>Decremant</button>

   </div>
)
}
export default UseRed