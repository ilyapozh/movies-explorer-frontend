import './App.css';
import React from 'react';
import Header from '../Header/Header';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <div className="app">
      <Header isLogged={isLogged}/> 
    </div>
  );
}

export default App;
