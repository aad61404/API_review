import axios from 'axios';
import fs from 'fs';


var config = {
    responseType: 'stream'
};

let url = 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_815.jpg';

async function getImage() {

    let resp = await axios.get(url, config);
    resp.data.pipe(fs.createWriteStream('image.jpg'));
}

getImage();