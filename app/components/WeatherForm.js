import React, { Component } from 'react';

class WeatherForm extends React.Component{
  render () {
    return(
      <div>
        <form>
          <input type="text" placeholder="Type City"></input>
        <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default WeatherForm ;
