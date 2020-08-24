import axios from 'axios';

export const KEY = "f87513bf06318738d3b472a6160b9d68";

const weatherapi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/"
});

export default weatherapi;