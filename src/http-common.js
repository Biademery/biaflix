import axios from 'axios';

const http = axios.create({
  baseURL: 'https://stark-eyrie-43196.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
