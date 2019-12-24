import React from 'react';
import './App.css';
import Main from './components/main/main';
import Nav from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <section className="navbar">
        <Nav/>
      </section>
      <section className="main">
        <Main/>
      </section>
    </div>
  );
}

export default App;
