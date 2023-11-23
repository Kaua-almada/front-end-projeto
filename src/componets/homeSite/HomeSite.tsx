import React from 'react';
import './HomeSite.css';
import NavBar from '../navbar/Navbar';
import ProdutoHome from '../produtosHome/ProdutosHome';


function Home() {
  return (
    <div className="pai-Home">
      <div className="content">
        <div className="image">
          <img src="https://png.pngtree.com/back_origin_pic/04/13/30/734f5ba4e4a772658913afbcf380dea5.jpg" alt="Imagem de boas-vindas" />
          </div>
      </div>
      <ProdutoHome/>
      
    </div>
  );
}

export default Home;
