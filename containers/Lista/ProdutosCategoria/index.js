import React , { Component } from 'react';

import Produtos from '../../../components/Listas/Produtos';
import Paginacao from '../../../components/Paginacao';

const PRODUTOS = [
  { id: 11, fotos: ["/static/img/mouse-1.png"], titulo:"Mouse Gamer 1", preco: 35,  promocao:25 },
  { id: 22, fotos: ["/static/img/mouse-4.png"], titulo:"Mouse Gamer 2 ",preco: 55,  promocao:55 },
  { id: 33, fotos: ["/static/img/mouse-5.png"], titulo:"Mouse Gamer 3", preco: 105, promocao:95 },
  { id: 44, fotos: ["/static/img/mouse2.png"],  titulo:"Mouse Gamer 4", preco: 160, promocao:150},
  { id: 55, fotos: ["/static/img/mouse-1.png"], titulo:"Mouse Gamer 1", preco: 35,  promocao:25 },
  { id: 66, fotos: ["/static/img/mouse-4.png"], titulo:"Mouse Gamer 2 ",preco: 55,  promocao:55 },
  { id: 77, fotos: ["/static/img/mouse-5.png"], titulo:"Mouse Gamer 3", preco: 105, promocao:95 },
  { id: 88, fotos: ["/static/img/mouse2.png"],  titulo:"Mouse Gamer 4", preco: 160, promocao:150}, { id: 19239123, fotos: ["/static/img/mouse-1.png"], titulo:"Mouse Gamer 1", preco: 35,  promocao:25 },
  { id: 99, fotos: ["/static/img/mouse-4.png"], titulo:"Mouse Gamer 2 ",preco: 55,  promocao:55 },
  { id: 10, fotos: ["/static/img/mouse-5.png"], titulo:"Mouse Gamer 3", preco: 105, promocao:95 },
  { id: 12, fotos: ["/static/img/mouse2.png"],  titulo:"Mouse Gamer 4", preco: 160, promocao:150},
];

class   ProdutosCategoria extends Component{
  state = { atual: 0}
  render(){
    return(
        <div className="container Produtos-Pagina-Inicial flex vertical"> 
         <br/><br/>
         <div className="flex flex-center">
           <h1>Acessórios</h1>
         </div>
         <br/>
          <Produtos
            produtos={PRODUTOS}
            itensPorLinha={4}
          />
          <Paginacao
            atual=  { this.state.atual || 0 }
            total=  { PRODUTOS.length * 4 }
            limite= { PRODUTOS.length }
            onClick={( numeroAtual ) => this.setState({ atual: numeroAtual })}
          />
        </div>

    )
  }
}

export default ProdutosCategoria;