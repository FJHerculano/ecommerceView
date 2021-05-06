import React, { Component } from 'react';
import Link from 'next/link';
import { render } from 'react-dom';

class Categorias extends Component{
    state = {
        categorias: [
            { id: 1, nome: "Acessórios"},
            { id: 2, nome: "Teclado"},
            { id: 3, nome: "Mouse Gamer"},
            { id: 4, nome: "Mousepad"},
            { id: 5, nome: "Webcam"},
        ]
    }

    render(){
        const { categorias } =  this.state;
        return(
            <div className="categorias flex horizontal-mb">
                {
                    categorias.map(categoria => (
                        <Link href={`/categoria/${categoria.nome}?id=${categoria.id}`}>
                            <div className="categoria-item flex-1 flex flex-center">
                                <span className="text-center" >{categoria.nome}</span>
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        )
    }
}

export default Categorias;