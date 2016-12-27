import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import { getTemp } from 'Apixu';
import ErrorMessage from 'ErrorMessage';


class Weather extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        isLoading: false
    }
  }

  componentDidMount() {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash= '#/';
    }
  }

  componentWillReceiveProps (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash= '#/';
    }
  }

  handleSearch = location => {
        this.setState({
          isLoading: true,
          errorstate: undefined,
          location: undefined,
          temp: undefined
        });

        getTemp(location).then(resultsObj => {
          this.setState({
            weatherText : resultsObj.weathercondition,
            weatherIcon: resultsObj.weathericon,
            location: location,
            temp: Math.floor(resultsObj.temp),
            isLoading: false
          });
        },errorMessage => {
          console.log(errorMessage.message);
          this.setState({isLoading: false, errorstate: errorMessage.message});
        });
  }

  render() {
    var {isLoading, temp, location, weatherText, weatherIcon, errorstate} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      }
       else if (temp && location) {
        return <WeatherMessage temp={temp} weatherText={weatherText} weatherIcon={weatherIcon} location={location} />;
      }
    }

    function renderError () {
      if (typeof errorstate === 'string') {
        return (
          <ErrorMessage message={errorstate}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get weather</h1>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      {renderError()}
    </div>
      )
    }
  }

export default Weather ;
