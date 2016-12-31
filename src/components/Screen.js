import React, { Component} from 'react';
import '../styles/screen.css';

export default class Screen extends Component{
    render(){
        return(
            <div className="row">
                <div className="small-12 columns">
                    <div id="calc-display">
                    </div>
                </div>
            </div>
        )
    }
}
