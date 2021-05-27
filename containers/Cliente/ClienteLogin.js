import React, { Component } from 'react';

import FormInput from '../../components/Inputs/FormSimples';

class ClienteLogin extends Component {

    state={
        email:"", 
        senha:""
    }

    renderAvisoDeRegistro(){
        return(
            <div className="flex-1">
                <h2>Comprar como visitante/Realizar Registro</h2>
                <br/>
                <button className="btn btn-success">
                    <span>CONTINUAR</span>
                </button>
            </div>
        )
    }

    renderFormLogin(){
        const { email, senha } = this.state;
        return(
            <div className="flex-1">
                <h2>Fazer Login</h2>
                <br/>
                <FormInput 
                    value={email} 
                    name={"email"}
                    label="e-mail" 
                    placeholder="email" 
                    onChange={(v) => this.setState({"email": v.target.value})} 
                />
                <br/>
                <FormInput 
                    value={senha} 
                    name={"senha"}
                    label="senha" 
                    type="password"
                    placeholder="Senha" 
                    onChange={(v) => this.setState({"senha": v.target.value})} 
                />
                <br/>
                <button className="btn brn-success">
                    <span>ENTRAR</span>
                </button>
            </div>
        )
    }
    render(){
        return (
            <div className="Cliente-Login flex horizontal">
                { this.renderAvisoDeRegistro() }
                { this.renderFormLogin() }
            </div>
        )
    }
}

export default ClienteLogin;