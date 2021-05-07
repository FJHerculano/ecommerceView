import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import Produto from '../../containers/Produto';
import Rodape from '../../containers/Rodape';

export default class Categoria extends Component {
    render(){
        return(
            <Layout title="Acessórios | Loja TOP -Os  melhores produtos as melhores marcas">
                <Cabecalho />
                <Produto />
                <Rodape/>
            </Layout>
        )
    }
}

