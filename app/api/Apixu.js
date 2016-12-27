import axios from 'axios';

const APIXU_URL = 'http://api.apixu.com/v1/current.json?key=930ec382a94440388e8123305162712';



  export function getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${APIXU_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(res => {

      if(res.data.current.temp_c !== 'undefined'){

        return {temp:res.data.current.temp_c,
                weathercondition:res.data.current.condition.text,
                weathericon:res.data.current.condition.icon
              }
            }
            else {
              throw new Error('unable to fetch data');
            }

    }, err => {
      throw new Error('unable to fetch data');
    });
  }
