const axios = require('axios').default;

const connectToURL = (url)=> {
    const req = axios.get(url);
    console.log(req);
}