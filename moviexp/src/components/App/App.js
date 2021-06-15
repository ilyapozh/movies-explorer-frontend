import './App.css';
import React from 'react';
import Main from '../Main/Main';


function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  return (
    <div className="app">
      <Main isLogged={isLogged}/>
    </div>
  );
}

export default App;
