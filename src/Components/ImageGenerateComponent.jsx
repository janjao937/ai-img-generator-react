import InputTextComponent from './InputTextComponent';
import GenerateImgButtonComponent from './GenerateImgButtonComponent';
import { useState } from "react";

const ImageGenerateComponent =()=>{
    const [search,setSearch] = useState("");

    return(
        <div className="container">
        <h1>{search}</h1>
        <div className="input-container">
            <InputTextComponent search={search} setSearch={setSearch}/>
            <GenerateImgButtonComponent/>
        </div>
        </div>
    )
}

export default ImageGenerateComponent;