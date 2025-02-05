import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form/Form.jsx';

const Test = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      <Test />
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
