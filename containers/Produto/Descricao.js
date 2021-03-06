import React from 'react';

const DESC = "Ótimo produto, de muita tecnologia.\n\nAlta disponibilidade e segurança\n\nTem botãozim legal e tudo pai";

const Descricao = () => (
  <div className="Descricao flex vertical">
    <h2>Descrição</h2>
    <br />
    <div>
      {DESC.split("\n").map((item, idx) => <p key={idx}>{item}</p>)}
    </div>
  </div>
)

export default Descricao;