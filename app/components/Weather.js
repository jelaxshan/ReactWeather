import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import { getTemp } from 'openWeatherMap';


class Weather extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        isLoading: false
    }
  }

  handleSearch = location => {
    var that = this;
    this.setState({isLoading: true});

    getTemp(location).then(temp => {
      this.setState({
        errorstate: false,
        location: location,
        temp: Math.floor(temp),
        isLoading: false
      });
    },errorMessage => {
      this.setState({isLoading: false, errorstate: true});
      console.log(errorMessage);
    });
  }

  render() {
    var {isLoading, temp, location, errorstate} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
      else if (errorstate){
        return <h3>Could not find your location</h3>
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
