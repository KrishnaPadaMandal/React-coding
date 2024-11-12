import React from "react";
function Child_m({ data })
{
    console.log("child Rerendering",data)
    return (
        <div>

            <h1>Child in Use Memo</h1>
        </div>
    )

}
export default React.memo(Child_m) 