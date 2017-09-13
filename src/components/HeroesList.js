import React, {Component} from 'react';

class HeroesList extends Component {
    componentWillMount() {
        fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return null;
    }
}

export default HeroesList;