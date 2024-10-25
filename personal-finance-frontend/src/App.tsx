// src/App.tsx
import React from 'react';
import './App.css';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Personal Finance Manager</h1>
      <AddTransaction />
      <Transactions />
    </div>
  );
};

export default App;
