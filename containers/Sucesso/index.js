import React, { Component } from 'react';

class SucessoContainer extends Component{
    state = { 
        pedidoSucesso: true,
        formaPagamento: "cartao"
    }

    renderBoleto(){
            return (
                <div>
                    <p>
                        Para finalizar o pedido, realize o pagamento do boleto pelo link abaixo:
                    </p>
                    <br/>
                    <a className="btn btn-success" href="#">
                        IMPRIMIR BOLETO
                    </a>
                    <br/>
                </div>
            )
    }

    renderCartao(){
        return (
            <div>
                <p>
                    O pagamento está sendo processado e você 
                    receberá uma confirmação pelo email em breve.
                    Obrigado por escolher a (LOJA)
                </p>
                <br/>
            </div>
        )
    }

    renderSucesso(){
        const { formaPagamento } = this.state;
        return (
            <div className="Sucesso">
                <br/>
                <h1 className="headline-big">PEDIDO CONCLUIDO COM SUCESSO</h1>
                <br/><br/>
                {
                    formaPagamento === "boleto" ? this.renderBoleto() : this.renderCartao()
                }
                <br/>
            </div>
        )
    }

    renderError(){
        return (
            <div className="Erro">
                <br/>
                <h1 className="headline-big">HOUVE UM ERRO COM O SEU PEDIDO</h1>
                <br/><br/>
                <p>
                    Houve um erro com o seu pedido e ele foi cancelado,
                    por favor refaça seu pedido ou entre em contato para
                    continuar o pedido.
                </p>
                <br/>
            </div>
        )
    }

    render(){
        const { pedidoSucesso } = this.state;
        return(
            <div className="Sucesso-Container container">
                { pedidoSucesso ? this.renderSucesso() : this.renderError() }
            </div>
        )
    }
}

export default SucessoContainer;