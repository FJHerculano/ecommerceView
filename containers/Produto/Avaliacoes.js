import React, { Component } from 'react';

class Avaliacoes extends Component{
  
  renderAvaliacoes(){
    return (
      <div className="avaliacoes-items flex horizontal wrap no-wrap-mb">
        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>Ótimo produto, gostei muito do mouse, tem botãozim massa e tudo, estou utilizando para lives de freefrai</p>
          </div>
          <div className="avaliacao-dados flex">
            <div className="avaliacao-nome flex-1 flex">
              <small>João Paulo</small>
            </div>
            <div className="avaliacao-pontuacão flex-1 flex">
              <span> 
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>mouse top, muito rapido, ainda bem que tem fio, se não ele vai simbora rsrs</p>
          </div>
          <div className="avaliacao-dados flex">
            <div className="avaliacao-nome flex-1 flex">
              <small>tchurusbengo</small>
            </div>
            <div className="avaliacao-pontuacão flex-1 flex">
              <span> 
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>mouse ruim do cara* foi três dia passando raiva com saPorr*</p>
          </div>
          <div className="avaliacao-dados flex">
            <div className="avaliacao-nome flex-1 flex">
              <small>Cicero eduardo</small>
            </div>
            <div className="avaliacao-pontuacão flex-1 flex">
              <span> 
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      
    )
  }

  renderFormularioDeAvaliacoes(){
    return(
      <div className="avaliacoes-form">
        <h4>Envie sua avaliação para o produto:</h4>
        <div className="flex vertical">
          <div className="flex horizontal">
            <label>Pontuação:&nbsp;</label>
            <select> 
            <option value="1"> 1 estrela</option>
            <option value="2"> 2 estrelas</option>
            <option value="3"> 3 estrelas</option>
            <option value="4"> 4 estrelas</option>
            <option value="5"> 5 estrelas</option>
            </select>
          </div>
          <div className="flex vertical">
            <label>Avaliações:</label>
            <br/>
            <textarea 
              rows="3" 
              style={{resize: "none", width:"100%", maxWidth: "500px"}}
              placeholder="Digite aqui a sua avaliação.."
              >

            </textarea>
          </div>
          <div> 
            <button
              onClick={() => alert("Avaliação enviada")}
              className="btn btn-primary btn-lg"
            >
              <span>Enviar Avaliação</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div className="Avaliacoes flex vertical" >
        <h2>Avaliações</h2>
        <br />
        { this.renderAvaliacoes() }
        <br />
        { this.renderFormularioDeAvaliacoes() }
      </div>
    )
  }
}

export default Avaliacoes;