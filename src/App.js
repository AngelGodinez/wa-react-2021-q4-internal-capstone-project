import React from 'react';
import './App.css';
import HomePage from './homePage';
import NavbarComponent from './navbar.component';
import FooterComponent from './footer.component';

function App() {

  return (
    <div className="App">
      <NavbarComponent/>
      <HomePage/>
      <FooterComponent/>
    </div>
  );
}

export default App;
