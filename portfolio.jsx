import React from "react";

function Port({Name,Image,Introduction,Hobbies})
{
    return(
        <>
        <div>
         <h4>{Name}</h4>
         <img src={Image} width='200'></img>
         <h5>{Introduction}</h5>
         <h6>{Hobbies}</h6>
        </div>
         </>
    )
}

export default Port