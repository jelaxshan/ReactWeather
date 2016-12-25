import React, { Component } from 'react';

class WeatherForm extends React.Component{
  render () {
    var {temp, location} = this.props;
    return(
    <h3>It is {temp} degrees in {location}</h3>
    );
  }
}

export default WeatherForm ;
