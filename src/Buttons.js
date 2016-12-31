import React, { Component } from 'react';
import '../styles/buttons.css';

export default class Buttons extends Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="small-12 columns">
                        <div id="ac-btn" className="small-3 columns button-container clear-button ac-button">AC
                        </div>
                        <div id="cancel-btn" className="small-3 columns clear-button button-container cancel-btn">
                            C
                        </div>
                        <div id="left-bracket-btn" className="small-3 columns button-container">
                            (
                        </div>
                        <div id="right-bracket-btn" className="small-3 columns button-container">
                            )
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <div id="sev-btn" className="small-3 columns button-container">
                            7
                        </div>
                        <div id="eight-btn" className="small-3 columns button-container">
                            8
                        </div>
                        <div id="nine-btn" className="small-3 columns button-container">9
                        </div>
                        <div id="plus-btn" className="small-3 columns button-container operator-button">
                            +
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <div id="four-btn" className="small-3 columns button-container">
                            4
                        </div>
                        <div id="five-btn" className="small-3 columns button-container">
                            5
                        </div>
                        <div id="six-btn" className="small-3 columns button-container">
                            6
                        </div>
                        <div id="minu-btn" className="small-3 columns button-container operator-button">-
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <div id="one-btn" className="small-3 columns button-container">
                            1
                        </div>
                        <div id="two-btn" className="small-3 columns button-container">
                            2
                        </div>
                        <div id="three-btn" className="small-3 columns button-container">
                            3
                        </div>
                        <div id="mult-btn" className="small-3 columns button-container operator-button">
                            *
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <div id="period-btn" className="small-3 columns button-container">
                            .
                        </div>
                        <div id="zero-btn" className="small-3 columns button-container">
                            0
                        </div>
                        <div id="double-zero-btn" className="small-3 columns button-container">
                            00
                        </div>
                        <div id="div-btn" className="small-3 columns button-container operator-button">
                            /
                        </div>
                    </div>
                </div>						
                
                <div className="row">
                    <div className="small-12 columns">
                        <div id="equals-btn" className="small-12 columns button-container eq-container">
                            =
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
