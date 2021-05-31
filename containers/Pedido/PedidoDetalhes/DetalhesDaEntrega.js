import React,{ Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';

const REGISTROS = [ 
    { data:"10/07/2021", situacao: "Objeto em separação"},
    { data:"11/07/2021", situacao: "Objeto entregue ao correio"},
    { data:"13/07/2021", situacao: "Objeto em trânsito"},
    { data:"15/07/2021", situacao: "Objeto entregue "},
];

class DetalhesDaEntrega extends Component{
    render(){
        return(
            <div className="flex-1">
                <div className="Detalhes-Da-Entrega">
                    <h4>SOBRE A ENTREGA</h4>
                    <br/>
                    <ListaStatus registros={REGISTROS}/>
                </div>
            </div>
        )
    }
}

export default DetalhesDaEntrega;