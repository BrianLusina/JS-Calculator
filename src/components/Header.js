import React, { Component } from 'react';
import '../styles/header.css';

export default class Header extends Component{
    render(){
        return(
 		<header>
			<div className="row">
				<div id="title_header">JS Calculator</div>
			</div>
		</header>           
        )
    }
}