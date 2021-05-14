import React , { Component } from 'react';

import Produtos from '../../components/Listas/Produtos';

const PRODUTOS = [
  {
    id: 19239123,
    fotos: ["/static/img/mouse-1.png"],
    titulo:"Mouse Gamer 1",
    preco: 35,
    promocao:25
  },
  {
    id: 191023,
    fotos: ["/static/img/mouse-4.png"],
    titulo:"Mouse Gamer 2 ",
    preco: 55,
    promocao:55
  },
  {
    id: 984395438,
    fotos: ["/static/img/mouse-5.png"],
    titulo:"Mouse Gamer 3",
    preco: 105,
    promocao:95
  },
  {
    id: 817238127,
    fotos: ["/static/img/mouse2.png"],
    titulo:"Mouse Gamer 4",
    preco: 160,
    promocao:150
  }
];
class   ProdutosRelacionados extends Component{
  render(){
    return(
        <div className=" Produtos-Relacionados flex vertical"> 
          <h2>Produtos Relacionados</h2>
          <br />
          <Produtos
            produtos={PRODUTOS}
            itensPorLinha={4}
          />
        </div>

    )
  }
}

export default ProdutosRelacionados;