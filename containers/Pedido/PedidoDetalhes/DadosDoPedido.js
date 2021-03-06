import React, { Component } from 'react';

import TextoDados from '../../../components/Texto/Dados';
import TabelaSimples from '../../../components/Tabela/Simples';
import {formatMoney} from '../../../utils';

class DadosDoPedido extends Component{
    renderDadosDoCliente(){
        return(
            <div className="flex-3">
                <h4 className="headline">DADOS DO CLIENTE</h4>
                <br/>
                <TextoDados chave="nome" valor= "Herculano"/>
                <TextoDados chave="CPF" valor= "111.222.333-46"/>
                <TextoDados chave="Telefone" valor= "(11) 1234-5678"/>
                <TextoDados chave="Data de Nascimento" valor= "29/01/1997"/>

            </div>
        )
    }

    renderDadosDoCarrinho(){
        const carrinho = [
            {
                "Produto":"Mouse Gamer 1 - p",
                "Preço Und.":formatMoney(55),
                "Quantidade": 1, 
                "Preço Total":formatMoney(55)
            },
            {
                "Produto":"Mouse Gamer 2 - m",
                "Preço Und.": formatMoney(50),
                "Quantidade": 2, 
                "Preço Total": formatMoney(100)
            },
        ];
        return(
            <div className="flex-5">
                <h4 className="headline">CARRINHO</h4>
                <br/>
                <TabelaSimples
                    cabecalho={[ "Produto", "Preço Und.", "Quantidade", "Preço Total" ]}
                    dados={carrinho}
                />

            </div>
        )
    }

    renderDadosDeEntrega(){
        return(
            <div className="flex-3">
                <h4 className="headline">DADOS DE ENTREGA</h4>
                <br/>
                <TextoDados chave="Endereço" valor="Rua teste"/>
                <TextoDados chave="Número" valor="123"/>
                <TextoDados chave="Bairro" valor="centro"/>
                <TextoDados chave="Complemento" valor=""/>
                <TextoDados chave="Cidade" valor="juazeiro do norte"/>
                <TextoDados chave="Estado" valor="CE"/>
                <TextoDados chave="CEP" valor="12345-789"/>
            </div>
        )
    }

    renderDadosDePagamento(){
        return(
            <div className="flex-5">
                <h4 className="headline">DADOS DE PAGAMENTO</h4>
                <br/>
                <TextoDados chave="Taxa de Entrega" valor={formatMoney(20)}/>
                <TextoDados chave="Valor do Pedido" valor={formatMoney(265)}/>
                <TextoDados chave="Valor Total" valor={formatMoney(285)}/>
                <TextoDados chave="Forma de Pagamento" valor="Cartão de Crédito - 2x"/>
                
            </div>
        )
    }

    render(){
        return (
            <div className="Detalhes-do-Pedido">
                <div className="flex horizontal">
                    { this.renderDadosDoCliente() }
                    { this.renderDadosDoCarrinho() }
                </div>
                <div className="flex horizontal">
                    { this.renderDadosDeEntrega() }
                    { this.renderDadosDePagamento() }
                </div>
            </div>
        )
    }
}

export default DadosDoPedido;