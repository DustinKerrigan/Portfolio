import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <About />
    </div>
  );
}

export default App;