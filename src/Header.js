import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component
{
  	render() {

  		const { title } = this.props;
  		
  		return (
	    	<div className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h2>{title}</h2>
	        </div>
        );

    }
}


export default Header;