import axios from 'axios';
import FormData from 'form-data';

async function makeGetRequest() {

    const form_data = new FormData();
    form_data.append('name', 'John Doe');
    form_data.append('occupation', 'gardener');

    let res = await axios.post('http://httpbin.org/post', form_data, 
        { headers: form_data.getHeaders() });

    let data = res.data;
    console.log(data);
}

makeGetRequest();

// {
//     args: {},
//     data: '',
//     files: {},
//     form: { name: 'John Doe', occupation: 'gardener' },
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       'Content-Length': '284',
//       'Content-Type': 'multipart/form-data; boundary=--------------------------761366730189664887592682',
//       Host: 'httpbin.org',
//       'User-Agent': 'axios/0.24.0',
//       'X-Amzn-Trace-Id': 'Root=1-618e294b-5ebd98e56212416033cb9ede'
//     },
//     json: null,
//     origin: '61.221.35.49',
//     url: 'http://httpbin.org/post'
//   }