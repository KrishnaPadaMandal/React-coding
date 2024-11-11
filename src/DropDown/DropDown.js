

import { useState } from "react"
import Country from "./Country"
function DropDown()
{
    let country_data = Country()
    let [state_data,set_state_data]  = useState(null)
    const country_id = (id)=>{
        let filter_data = country_data.filter((i)=>i.id===id)
        set_state_data(filter_data[0].states)
    }
    return (
        <div style={{marginTop:"250px"}}>
<h1>Country List</h1>
{country_data?.map((i)=>{
    return(
        <p style={{color:'#3fcde9', cursor:'pointer'}} key={i.id} onClick={()=>{country_id(i.id)}}>{i.name}</p>
    )
})}

{
    state_data?.map((i)=>{
        return(
            <p key={i.id}>{i.name}:{i.population}</p>
        )
    })
}

        </div>
    )

}

export default DropDown