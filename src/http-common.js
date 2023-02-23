import axios from 'axios';

const http = axios.create({
  baseURL: 'https://git.heroku.com/stark-eyrie-43196.git/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
