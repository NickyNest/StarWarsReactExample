import React, { Component } from 'react';
import './App.css';
import HeroesList from './components/HeroesList';
// import SelectedHero from './components/SelectedHero';

class App extends Component {
  render() {
    return (
      <div className="">
        <HeroesList />
        {/* <SelectedHero /> */}
      </div>
    );
  }
}

export default App;
