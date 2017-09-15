import React, { Component } from 'react';
import './App.css';
import HeroesList from './components/HeroesList';
import SelectedHero from './components/SelectedHero';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        hero: {}
    }
}

  handleClick = (hero) => {
    this.setState({ hero });
  };

  render() {
    return (
      <div className="">
        <HeroesList handleClick={this.handleClick} />
        <SelectedHero hero={this.state.hero} />
      </div>
    );
  }
}

export default App;
