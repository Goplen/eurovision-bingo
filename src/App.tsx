import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Cards from "./components/Bingo/Cards";

function App() {
  return (
      <div className="app">
          <Header />
          <Cards />
      </div>
  );
}

export default App;
