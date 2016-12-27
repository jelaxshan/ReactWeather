import axios from 'axios';

const APIXU_URL = 'http://api.apixu.com/v1/current.json?key=930ec382a94440388e8123305162712';



  export function getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${APIXU_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }
      else {

        return {temp:res.data.current.temp_c,
                weathercondition:res.data.current.condition.text,
                weathericon:res.data.current.condition.icon
              } ;
      }
    }, function () {
      throw new Error(res.data.error.message);
    });
  }
