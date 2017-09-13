import React, { Component } from 'react';
import './App.css';
import HeroesList from './components/HeroesList';
// import SelectedHero from './components/SelectedHero';

class App extends Component {

  handleClick = (hero) => {
    console.log(hero);
    this.setState({ hero });
  };

  render() {
    return (
      <div className="">
        <HeroesList handleClick={this.handleClick} />
        {/* <SelectedHero /> */}
      </div>
    );
  }
}

export default App;
