import React from 'react';
import WeatherForm from 'WeatherForm';


var Weather  = React.createClass({

  render: function() {
    return (
      <div>
      <h3>Weather Component</h3>
      <WeatherForm/>
    </div>
    )
  }
});

module.exports = Weather ;
