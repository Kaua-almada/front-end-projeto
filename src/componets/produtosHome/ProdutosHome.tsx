import React from "react";
import Cards from "../cards/Cards";
import './ProdutosHome.css'

function ProdutoHome(){
    return(
        <div className="Pai-Home-P">
            <h1>
                Confira nossos produtos Incriveis!
            </h1>
            <div className="Card-Home">
                <Cards/>
            </div>
        </div>
    )
}
export default ProdutoHome;