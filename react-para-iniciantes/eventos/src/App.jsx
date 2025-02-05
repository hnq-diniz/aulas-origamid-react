import React from 'react';

const App = () => {
  function handleClick(event) {
    console.log(event);
  }
  function handleScroll() {
    console.log('Fez o scroll');
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh' }}>
      <button onClick={handleClick}>Click</button>
      <button style={{ marginLeft: '20px' }} onClick={() => alert('Você ativou!')}>
        CLique para ativar
      </button>
    </div>
  );
};
export default App;
