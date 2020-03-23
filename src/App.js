import React from 'react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="header-title">Statestreet React Challange</h1>
      </header>
      <div className="container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
