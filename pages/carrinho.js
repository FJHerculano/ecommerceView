import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import CarrinhoContainer from '../containers/Carrinho';
import Rodape from '../containers/Rodape';

export default class Carrinho extends Component {
    render(){
        return(
            <Layout title="Carrinho | Loja foda -  Melhores produtos">
                <Cabecalho simples />
                <CarrinhoContainer />
                <Rodape />
            </Layout>

        )
    }
}