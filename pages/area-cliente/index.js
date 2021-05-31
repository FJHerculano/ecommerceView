import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AreaDoClienteContainer from '../../containers/AreaDoCliente';
import Rodape from '../../containers/Rodape';

export default class AreaDoCliente extends Component {
    render(){
        return(
            <Layout title="Minha Conta | LOJA - Melhores produtos para informaica">
                <Cabecalho/>
                <AreaDoClienteContainer/>
                <Rodape/>
            </Layout>
        )
    }
}