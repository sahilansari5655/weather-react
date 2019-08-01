import React, { Component } from 'react';
import GetWeather from './getWeather';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      alignText : "center"
      
    };
    return(
      <div align='center'>
               
       <h2 style={mystyle}><img src="https://img.pngio.com/weather-png-hd-weather-png-transparent-480_480.png" alt="" width="90" /> Weather Station</h2>
        <GetWeather />
      </div>
    )
  }
}

export default App;