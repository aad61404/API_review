import axios from 'axios';

axios.get('http://webcode.me').then(resp => {

    console.log(resp.data);
});


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>My html page</title>
// </head>
// <body>

//     <p>
//         Today is a beautiful day. We go swimming and fishing.
//     </p>

//     <p>
//           Hello there. How are you?
//     </p>

// </body>
// </html>