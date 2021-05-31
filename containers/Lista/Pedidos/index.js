import React, { Component } from 'react';

import Pedidos from '../../../components/Listas/Pedidos';
import Paginacao from '../../../components/Paginacao';

const PEDIDOS =[ 
    {
        id: 456789,
        data:"16/07/2019",
        valor:189.55,
        status:"Pago / Entregue"
    },
    {
        id: 123456,
        data:"18/07/2019",
        valor:255.55,
        status:"Pago / Em Trânsito"
    },
    {
        id: 255948,
        data:"20/07/2019",
        valor:155.55,
        status:"Pago / Em Separação"
    },
    {
        id: 147852,
        data:"28/07/2019",
        valor:300.55,
        status:"A pagar / --"
    }
];

class ListaPedidos extends Component{
    state = { atual:0 }
    render(){
        return(
            <div className="flex-4 conteudo-area-cliente">
                <h2>MEUS PEDIDOS</h2>
                <br/>
                <Pedidos pedidos={PEDIDOS}/>
                <Paginacao
                    atual={this.state.atual || 0}
                    total={PEDIDOS.length * 4}
                    limite={PEDIDOS.length}
                    onClick={() => this.setState({ atual: numeroAtual })}
                />
            </div>
        )
    }
}

export default ListaPedidos;