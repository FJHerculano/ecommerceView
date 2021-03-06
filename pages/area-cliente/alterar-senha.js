import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AlterarSenhaContainer from '../../containers/AreaDoCliente/AlterarSenha';
import Rodape from '../../containers/Rodape';

export default class AlterarSenha extends Component {
    render(){
        return(
            <Layout title="Alterar Senha | LOJA">
                <Cabecalho/>
                <AlterarSenhaContainer/>
                <Rodape/>
            </Layout>
        )
    }
}