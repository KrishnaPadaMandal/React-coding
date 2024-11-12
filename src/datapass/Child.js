
import {useState} from 'react'

function Child({data})
{
    
   const [state, setstate] = useState("");
   const handelData = (e)=>{
e.preventDefault()
console.log("Child state",state)
data(state)
   }
   return (
    <>
    <h1>Child</h1>
    <br></br>
    <form onSubmit={handelData}>
  
  <input type="text" placeHolder = "Enter your data" value = {state} onChange={(e)=>{setstate(e.target.value)}} />
  <button type='submit'>Sent</button>
    </form>
    </>
   )

}
export default Child