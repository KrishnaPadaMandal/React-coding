import {useCallback, useState } from "react"
import Country  from "./Country"
import debounce from "lodash.debounce"
function Debounce()
{
    const [country_data,setData] = useState(Country)

    const [value,set_value] = useState("")
   

    let serchKey = useCallback(
        debounce((key)=>{
            console.log("KEy",key)
            set_value(key)
            if(key)
            {
                const filter_data = country_data.filter((i)=>i.name.toLocaleLowerCase().includes(key.toLocaleLowerCase()))
                setData(filter_data)

            }
            else {
                setData(Country)
            }
           
        },200),[]
      
    )
    return(
        <>
        <input type="text" placeholder="Enter Your Key" value={value} onChange={(e)=>{serchKey(e.target.value)}}/>
        {
            <ul>
                {country_data?.map((i)=>{
                    return(
                        <li key={i.id}>{i.name}</li>
                    )
                })}
            </ul>
        }
        </>
    )

}
export default Debounce