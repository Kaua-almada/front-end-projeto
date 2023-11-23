import React from "react";
import axios from 'axios';

async function getUser(divId: HTMLDivElement) {
    const userUri = "http://localhost:8081/api/users";
    
        await axios.get(userUri).then((response)=>{
            var content = "";
            const dataUser: Record<string,{name: string, lastName: string, email: string, password: string, cpf: string }>
         = response.data;
         
        const dataUserArray = Object.entries(dataUser).map(([key, value]) => ({
            key,
            ...value
        }));

        dataUserArray.forEach((dados) => {

            content += `
            <div class="produtos">
                <h1>produtos</h1>
            </div>
            <div class="Imagens">
                <div>
                    <img src="${dados.name}" alt="Imagem do usuario">
                </div>
                <div class="valor">
                    <h1> ${dados.lastName}</h1>
                </div>
            </div>`;
    
        });
        divId.innerHTML = content;
        })
}
async function getProducts(divTeste: HTMLDivElement){
    const produtosUri = "http://localhost:8081/api/produtos"

    await axios.get(produtosUri).then((response)=>{
        var content = "";
        const dataProducts: Record<string,{name: string, factory: string, quantity: Number}>
         = response.data;
         
         const dataProductsArray = Object.entries(dataProducts).map(([key,value])=> ({
            key,
            ...value
         }));
         dataProductsArray.forEach((dados)=>{
            content +=`
            <div class="produtos">
                <h1>produtos</h1>
            </div>
            <div class="Imagens">
                <div>
                    <img src="${dados.name}" alt="Imagem do usuario">
                    <h1> ${dados.factory}</h1>
                    <h1> 12$</h1>
                </div>
            </div>`
         })
         divTeste.innerHTML = content;
    })
}
async function getSales(divTeste: HTMLDivElement) {
    const vendaUri = "http://localhost:8081/api/venda";

    await axios.get(vendaUri).then((response)=>{
        var content = "";
        const dadaVenda: Record<string,{name: string, produts: string, valor: Number, finishedSale: boolean, 
            discount: Number, dateSale: string}>
        = response.data;
            console.log("valor",dadaVenda)
        const dataVendaArray = Object.entries(dadaVenda).map(([key,value])=> ({
            key,
            ...value
        }));
        
        dataVendaArray.forEach((dados)=>{
            content += `
        <div class="Imagens">
            <div>
                <img src="${dados.name}" >
                    <div>
                        <h1> ${dados.produts}</h1>
                    </div> 
            </div>
        </div>`
        })
        divTeste.innerHTML = content;
    })   
}
export default {getUser, getProducts, getSales};
