import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';


var Weather  = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },

  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
    });

  },
  render: function() {
    var {temp, location} = this.state;

    return (
      <div>
      <h3>Weather Component</h3>
    <WeatherForm onSearch={this.handleSearch}/>
  <WeatherMessage temp={temp} location={location}/>
    </div>
    )
  }
});

module.exports = Weather ;
