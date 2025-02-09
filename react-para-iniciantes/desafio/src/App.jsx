// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const janelaAtual = window.location.pathname;

let Componente;
if (janelaAtual === '/produtos') {
  Componente = Produtos;
} else {
  Componente = Home;
}

const App = () => {
  return (
    <>
      <Header />
      <Componente />
    </>
  );
};
export default App;
