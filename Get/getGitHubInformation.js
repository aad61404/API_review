import axios from 'axios';

async function getNumberOfFollowers() {

  let res = await axios.get('https://api.github.com/users/janbodnar');

  let nOfFollowers = res.data.followers;
  let location = res.data.location;

  console.log(`# of followers: ${nOfFollowers}`)
  console.log(`Location: ${location}`)
}

getNumberOfFollowers();

// $ node github_info.js 
// # of followers: 195
// Location: Bratislava