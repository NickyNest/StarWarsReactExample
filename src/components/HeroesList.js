import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class HeroesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heroes: []
        }
    }

    static propTypes = {
        handleClick: PropTypes.func.isRequired
    };

    componentWillMount() {
        fetch('https://swapi.co/api/people/')
            .then(response => response.json())
            .then(data => this.setState({ heroes: data.results }));
    }

    handleClick = (ev, index) => {
        ev.preventDefault();
        this.props.handleClick(this.state.heroes[index]);
    };

    render() {
        return (
            <nav className="col">
                {this.state.heroes.map((hero, index) => (
                    <a className="hero-item" key={hero.name} href=""
                    onClick={(ev) => this.handleClick(ev, index)}>{hero.name}</a>
                ))}
            </nav>
        );
    }
}

export default HeroesList;