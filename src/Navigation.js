import React, { Component } from 'react';
import './Navigation.css';
import ListItem from './ListItem.js'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Daniel'}
    }
  render() {
    return (
      <div className='navbar'>
          <nav className='nav'>
              <ListItem state= {this.state.name}/>
              <p>{this.state.name}</p>
          </nav>
      </div>
    );
  }
}

export default Navigation;
