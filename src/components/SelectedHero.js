import React, { Component } from 'react';

class SelectedHero extends Component{
    render(){
        const { hero } = this.props;
        return (
            <div>
                <div>{hero.name}</div>
                <div>{hero.height}</div>
                <div>{hero.mass}</div>
            </div>
        );
    }
}

export default SelectedHero;