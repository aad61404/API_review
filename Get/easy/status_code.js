import axios from 'axios';

async function makeRequest() {

    const config = {
        method: 'head',
        url: 'http://webcode.me'
    }

    let res = await axios(config)

    console.log(res.status);
}

makeRequest();
// 200

