import Axios from 'axios';

const API = Axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export default API;
