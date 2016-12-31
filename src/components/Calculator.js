import Screen from './Screen';
import Buttons from './Buttons';
import React, { Component } from 'react';
import '../styles/calculator.css';

export default class Calculator extends Component{
    render(){
        return(
            <div id="calculator" className="small-4 columns">
                <Screen />
                <Buttons />
            </div>
        )
    }
}
