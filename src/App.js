import React from 'react';
import './App.css';
import SlickSlider from './Components/SlickSlider/SlickSlider';
import SectionNav from './Components/SectionNav/SectionNav';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SectionNav />
        <SlickSlider />
      </header>
    </div>
  );
}

export default App;
