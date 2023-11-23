import React from "react";
import './Inputproducts.css'
import {Link} from "react-router-dom";
import NavBar from "../navbar/Navbar";


function  InputProducts(){
    return(
        <div className="input-Products-pai">
            <div className="produto">
                <p>
                    bem vindo ao registro de produtos
                </p>

        </div>
            <div className="inputsProducts">
                <input type="text" placeholder="digite nome do produto"></input>
                <input type="text" placeholder="ditite a validade"></input>
                <input type="text" placeholder="digite a quantidade"></input>
            </div>
        </div>
    )
}
export default InputProducts;