import axios from 'axios';

// 先執行
// json-server --watch users.json  

async function makeGetRequest() {

  let res = await axios.get('http://localhost:3000/users/');

  let data = res.data;
  console.log(data);
}

makeGetRequest();