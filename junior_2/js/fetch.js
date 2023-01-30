const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type' : 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if(response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e  = new Error('Request doesnt go')
            e.data = error
            throw e
        });
    });
};

const body = {
    name: 'Vladelin',
    age: 23,
}

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Метод GET

// function sendRequest(method, url, body = null) {
//     return fetch(url).then(response => {
//         return response.json()
//         // только когда у нас метод get
//     })
// };

// sendRequest('GET', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))