import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import { getTemp } from 'Apixu';


class Weather extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        isLoading: false
    }
  }

  handleSearch = location => {
    this.setState({isLoading: true});

    getTemp(location).then(resultsObj => {
      this.setState({
        weatherText : resultsObj.weathercondition,
        weatherIcon: resultsObj.weathericon,
        errorstate: false,
        location: location,
        temp: Math.floor(resultsObj.temp),
        isLoading: false
      });
    },errorMessage => {
      this.setState({isLoading: false, errorstate: true});
    });
  }

  render() {
    var {isLoading, temp, location, weatherText, weatherIcon, errorstate} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      }
      else if (errorstate){
        return <h3>Could not find your location</h3>
      }
       else if (temp && location) {
        return <WeatherMessage temp={temp} weatherText={weatherText} weatherIcon={weatherIcon} location={location} />;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
</div>
)
}
}

export default Weather ;
