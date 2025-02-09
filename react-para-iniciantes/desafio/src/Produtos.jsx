import React from 'react';
import Titulo from './Titulo';
import Produto from './Produto';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    { nome: 'Tablet', propriedades: ['4gb ram', '254gb'] },
  ];

  return (
    <section>
      <Titulo texto='Produtos' />
      {produtos.map(produto => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  );
};

export default Produtos;
