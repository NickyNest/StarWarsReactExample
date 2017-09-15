import React, { Component } from 'react';

class SelectedHero extends Component{
    render(){
        console.log(this.props);
        return (
            <div>
                Selected hero
            </div>
        );
    }
}

export default SelectedHero;