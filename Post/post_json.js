import axios from 'axios';

async function makeGetRequest() {

    let payload = { name: 'John Doe', occupation: 'gardener' };

    let res = await axios.post('http://httpbin.org/post', payload);

    let data = res.data;
    console.log(data);
    console.log(res.request);
}

makeGetRequest();