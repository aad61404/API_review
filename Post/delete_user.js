import axios from 'axios';

async function makePostRequest() {

    let res = await axios.delete('http://localhost:3000/users/6/');

    console.log(res.status);
}

makePostRequest();