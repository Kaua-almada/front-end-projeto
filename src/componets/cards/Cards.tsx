import React from "react";
import './Cards.css';
import axios from 'axios';
import getSales from '../../services/api'
import { useEffect, useState } from "react";

function Cards(){
    useEffect(() => {
        var teste = document.getElementById("mainCard") as HTMLDivElement;
        console.log(teste)
        var result = "oi";
        getSales.getSales(teste)
        // teste get sales na div 
        console.log(getSales)
    }, []);
    
    return(
        <div id="mainCard" className="mainCard">
        </div>
    )
}

export default Cards;