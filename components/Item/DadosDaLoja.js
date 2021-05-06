import React from 'react';

const DadosDaLoja = () => (
  <div className="flex-1 dados-da-loja">
    <div>
      <h2>Entre em contato</h2>
      <br />
    </div>
    <p className="loja-nome"> Nome: Loja TOP </p>
    <p className="loja-cnpj"> CNPJ: 13.123.456/0001-02 </p>
    <p className="loja-email"> E-mail: <a href="mailto:teste@gmail.com">teste@gmail.com</a> </p>
    <p className="loja-telefones"> Telefones: </p>
    <p className="loja-telefones">&nbsp;&nbsp; <a href="phone: (88) 98855-2211 "> (88) 98855-2211 </a></p>
    <p className="loja-telefones">&nbsp;&nbsp; <a href="phone: (88) 98855-2211 "> (88) 98855-2211 </a></p>
    <p className="loja-telefones">&nbsp;&nbsp; <a href="phone: (88) 98855-2211 "> (88) 98855-2211 </a></p>
    <p className="loja-endereco">Rua Teste, 123 - Bairro tal</p>
    <p className="loja-cidade">Juazeiro do norte/CE - 63102-528</p>
  </div>
)

export default DadosDaLoja;