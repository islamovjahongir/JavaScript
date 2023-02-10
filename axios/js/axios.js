const axios = require('axios').default;

// axios
//     .get('https://fortniteapi.io/v3/challenges', {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: '7e439072-010c1dd8-a17fb958-822bcb4b'
//         },

//         params: {
//             season: 'current',
//             lang: 'ru'
//         }
//     })
//     .then((response) => {
//         console.log(response.data)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

// axios.post('https://jsonplaceholder.typicode.com/posts', {userId:1, title: 'My title', body: 'Json data'})
//     .then((response) => {
//         console.log(response.data)
//     })
//     .catch((error) => {
//         console.error(error)
//     })

axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
        userId: 1,
        title: 'Json title',
        body: 'Json body',
    }
}).then((response) => {
    console.log(response.data)
}).catch((error) => {
    console.error(error)
})