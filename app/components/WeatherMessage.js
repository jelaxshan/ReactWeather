import React, { Component } from 'react';

class WeatherMessage extends React.Component{
  render () {
    var {temp, location, weatherText, weatherIcon} = this.props;
    return(
      <h3>It is {temp} degrees and {weatherText} <img src={`http:${weatherIcon}`}/> in {location}</h3>
    );
  }
}

export default WeatherMessage ;
