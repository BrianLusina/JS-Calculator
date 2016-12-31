import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Calculator from './Calculator';

export default class Screen extends Component{
    render(){
        return(
            <div>
                <Header />
                    <section>
                        <div className="row">
                            <div className="small-4 columns">
                                <div style={{padding:50}}></div>
                            </div>

                            <Calculator />
                            
                            <div className="small-4 columns">
                                <div style={{padding:50}}></div>
                            </div>
                        </div>
                    </section>
                <Footer />
            </div>
        )
    }
}