import axios from "axios";

const APIKEY = "82f2229c255b1505c496b13203e48e52";
const BASE = "http://api.openweathermap.org/data/2.5/forecast";
const QUERY = "?id=360630";
const UNITS = "&units=metric";
const URL = `${BASE}${QUERY}${UNITS}&APPID=${APIKEY}`;

// let api = {
//   getData() {
//     axios
//       .get(`${BASE}&APPID=${APIKey}`)
//       .then(response => response.json())
//       .catch(error => console.warn(error));
//   }
// };

// let api = {
//   getData() {
//     return fetch(`${BASE}&APPID=${APIKey}`)
//       .then(response => response)
//       .catch(error => console.warn(error));
//   }
// };

export { BASE, APIKEY, URL };

// const getLocation = () => {
//   if (navigator.geolocation) {
//     //check if geolocation is available
//     navigator.geolocation.getCurrentPosition(position => {
//       // console.log(position.coords.latitude, position.coords.longitude);
//       this.setState({
//         lat: position.coords.latitude,
//         lon: position.coords.longitude
//       });
//     });
//   }
// };
