import React,{ Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';

const REGISTROS = [ 
    { data:"08/07/2021", situacao: "Pagamento em processamento"},
    { data:"09/07/2021", situacao: "Pagamento Aprovado"},
    { data:"11/07/2021", situacao: "Pagamento Recebido"},
];

class DetalhesDoPagamento extends Component{
    render(){
        return(
            <div className="flex-1">
                <div className="Detalhes-Da-Entrega">
                    <h4>SOBRE O PAGAMENTO</h4>
                    <br/>
                    <ListaStatus registros={REGISTROS}/>
                </div>
            </div>
        )
    }
}

export default DetalhesDoPagamento;