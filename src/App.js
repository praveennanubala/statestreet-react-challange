import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import TransactionsViewPage from './pages/TransactionView';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1 className="header-title">Statestreet React Challange</h1>
        </header>
        <div className="container">
          <Switch>
            <Redirect exact path="/" to="/transactions" />
            <Route exact path="/transactions" component={HomePage} />
            <Route exact path="/transaction/view/:accountNumber" component={TransactionsViewPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
