import React from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = React.useState(0);

  // const valor = React.useMemo(() => {
  //   const localStorageItem = window.localStorage.getItem('produto');
  //   console.log('teste');
  //   return localStorageItem;
  // }, []);

  const handleClick = React.useCallback(() => {
    setContar(contar => contar + 1);
  }, []);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{valor}</button>;
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App;
