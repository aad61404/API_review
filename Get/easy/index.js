import axios from 'axios';

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'http://webcode.me',
        headers: { 'User-Agent': 'Axios - console app' }
    }

    let res = await axios(config)

    console.log(res.request._header);
}
makeRequest();

// GET / HTTP/1.1
// Accept: application/json, text/plain, */*
// User-Agent: Axios - console app
// Host: webcode.me
// Connection: close
