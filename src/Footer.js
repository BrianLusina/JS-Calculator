import React, { Component } from 'react';
import '../styles/footer.css'

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="row">
                    <div id="footer-container">Made for <i className="fa fa-calculator"></i> by <a href="http://www.codepen.io/mercury">The Lusina</a></div>
                </div>
            </footer>
        )
    }
}
