import React, { Component } from 'react';
import Header from './Header';
import Screen from './Screen';
import Buttons from './Buttons';
import Footer from './Footer';

export default class Screen extends Component{
    render(){
        return(
            <Header />
            <Screen />
            <Buttons />
            <Footer />
        )
    }
}