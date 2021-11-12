import axios from 'axios';
import url from 'url';

async function makeGetRequest() {

    let payload = { name: 'John Doe', occupation: 'gardener' };

    const params = new url.URLSearchParams(payload);
    // console.log('params:', params)
    let res = await axios.get(`http://httpbin.org/get?${params}`);

    let data = res.data;
    console.log(data);
}

makeGetRequest();

// {
//     args: { name: 'John Doe', occupation: 'gardener' },
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       Host: 'httpbin.org',
//       'User-Agent': 'axios/0.24.0',
//       'X-Amzn-Trace-Id': 'Root=1-618e21d2-0d61d91c1d66a5224906347d'
//     },
//     origin: '61.221.35.49',
//     url: 'http://httpbin.org/get?name=John+Doe&occupation=gardener'
// }