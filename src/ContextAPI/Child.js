import React, {useContext } from "react"
import { myContext } from "./Parent"

function Child()
{
    const value =useContext(myContext)
    console.log(" child Value",value)
    return(
        <h1>There are data get from Prreant {value}</h1>
    )
}
export default React.memo(Child)