import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedHero extends Component {
    static propTypes = {
        hero: PropTypes.object.isRequired
    };

    render(){
        const { hero } = this.props;
        return (
            <div className="col">
                <div>{hero.name}</div>
                <div>{hero.height}</div>
                <div>{hero.mass}</div>
            </div>
        );
    }
}

export default SelectedHero;