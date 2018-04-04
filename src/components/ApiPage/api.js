const APIKEY = "82f2229c255b1505c496b13203e48e52";
const BASE = "https://api.openweathermap.org/data/2.5/forecast";
const QUERY = "?id=360630";
const UNITS = "&units=metric";
const URL = `${BASE}${QUERY}${UNITS}&APPID=${APIKEY}`;

export { BASE, APIKEY, URL };
