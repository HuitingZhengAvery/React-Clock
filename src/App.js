import React, { Component } from 'react';
import './App.css';
import DateDisplay from './DateDisplay';
import TimeDisplay from'./TimeDisplay';
import Greeting from'./greeting';

export default class App extends Component {


  render() {
    return(

      <div className='App'>
        <Greeting/>
        <div className='App-clock'>
        <DateDisplay city='America/New_York' location='New York'/>
        <TimeDisplay city='America/New_York' location='New York'/>
        </div>
        <div className='App-clock'>
        <DateDisplay city='Australia/Melbourne' location='Melbourne'/>
        <TimeDisplay city='Australia/Melbourne' location='Melbourne'/>
        </div>
        
      </div>
      
    );
  }  
  }