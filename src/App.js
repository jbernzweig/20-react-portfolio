import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jason Bernzweig</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>
      <section id="about">
        About Me
      </section>

      <footer>
        Contact Me | 440-591-0465 <br></br>
        {/* This is a footer */}
      </footer>
    </div>
  );
}

export default App;
