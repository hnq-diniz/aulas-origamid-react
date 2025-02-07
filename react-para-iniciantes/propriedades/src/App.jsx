import React from 'react';

const Titulo = props => {
  return (
    <h1 style={{ color: props.cor }}>
      {props.texto} {props.children}
    </h1>
  );
};

const Paragrafo = ({ cor, texto }) => {
  return <p style={{ color: cor }}>{texto}</p>;
};

const App = () => {
  return (
    <>
      <Titulo cor='red' texto='Primeiro titulo'>
        - Esse é o children do primeiro titulo
      </Titulo>
      <Paragrafo cor='green' texto='Paragrafo do primeiro titulo' />
      <Titulo cor='blue' texto='Segundo titulo' />
      <Paragrafo cor='orange' texto='Paragrafo do segundo titulo' />
    </>
  );
};
export default App;
