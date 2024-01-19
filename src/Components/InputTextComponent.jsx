import { useState } from "react";


const InputTextComponent = ({setSearch})=>{


    return(
        <>
       
            <input onChange={e=>setSearch(e.target.value)} className="input-text" type="text" />
           
        </>
    )
}


export default InputTextComponent;