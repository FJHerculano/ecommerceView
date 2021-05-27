import React, { Component } from 'react';

import Layout from '../components/Layout';

import Cabecalho from '../containers/Cabecalho';
import CheckoutContainer from '../containers/Checkout'
import Rodape from '../containers/Rodape';

export default class Checkout extends Component {
    render(){
        return(
            <Layout title="Checkout | Loja Foda - melhores produtos de tecnologia">
                <Cabecalho simples/>
                <CheckoutContainer/>
                <Rodape/>
            </Layout>
        )
    }
}