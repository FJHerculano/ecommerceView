import React, { Component } from 'react';

import Layout from '../../../components/Layout';
import Cabecalho from '../../../containers/Cabecalho';
import PedidoContainer from '../../../containers/Pedido';
import Rodape from '../../../containers/Rodape';

export default class Pedido extends Component {
    render(){
        <Layout>
            <Cabecalho/>
            <PedidoContainer/>
            <Rodape/>
        </Layout>
    }
}