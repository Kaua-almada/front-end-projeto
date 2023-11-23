import React from "react";
import './InputSales.css'
import NavBar from "../navbar/Navbar";
import axios from "axios";

async function UserDataPost(){
    var salesNameInput = document.getElementById("userName") as HTMLInputElement || null;
    var salesProduts = document.getElementById("userLastName") as HTMLInputElement || null;
    var salesValor = document.getElementById("userEmail") as HTMLInputElement || null;
    var salesFinishedSale = document.getElementById("userPasseword") as HTMLInputElement || null;
    var salesDiscount = document.getElementById("userCpf") as HTMLInputElement || null;
    var salesUri = "http://localhost:8081/api/sales";
     var userDataJson = {
        
        "name": salesNameInput.value.toString(),
        "produts": salesProduts.value.toString(),
        "valor": salesValor.value.toString(),
        "finishedSale": salesFinishedSale.value.toString(),
        "discount": salesDiscount.value.toString()
    };
      await axios.post(salesUri, userDataJson,
        {
          headers: {
            withCredentials: true,
            "Content-Type": "application/json"
          },
          maxRedirects: 0,
        }).then((response)=>{
        console.log(response)
      })
      .catch((erro)=>{
        console.log("error")
      })
    }


function  InputSales(){
    return( 
        <div>   
        <div className="container">

    <div className="inputs">
        <input type="text" placeholder="digite o user do produto"></input>
    </div>

    <div className="inputs">
        <input type="text" placeholder="digite o produto"></input>
    </div>

    <div className="inputs">
        <input type="text" placeholder="digite o valor"></input>    
    </div>

    <div className="inputs">
        <input type="text" placeholder="digite a data de validade"></input>
    </div>

    <div className="inputs">
            <input type="text" placeholder="digite a data da venda"></input>
    </div>
    <div className="botaopost">
        <button id="sendpost" onClick={UserDataPost}>post</button>
    </div>
</div>
</div>

    )
}
export default InputSales;