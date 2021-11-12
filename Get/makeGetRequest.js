import axios from 'axios';
import url from 'url';

var makeGetRequest = async() => {

    let payload = { name: 'John Doe', occupation: 'gardener' };

    const params = new url.URLSearchParams(payload);

    let res = await axios.get(`http://httpbin.org/get?${params}`);

    let data = res.data;
    console.log(data);
}

makeGetRequest();