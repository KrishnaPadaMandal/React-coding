import { useState } from "react";
function Counter()
{
    const [count,setCount] = useState(0)
    let counterUpdated = (type)=>{
        console.log("Type",type)

        if(type==="increment")
        {
            if(count<5)
            {
                setCount(count + 1)  

            }
        }
        else {
            setCount(count-1)
        }

    }
    return(
            <div>

                <h1>Counter:{count}</h1>
                <button onClick={()=>counterUpdated("increment")}>Increment</button><br/>
                <button onClick={()=>counterUpdated("decrement")}>Decrement</button>

            </div>
        );

}
export default Counter