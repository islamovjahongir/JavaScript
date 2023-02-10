const Mynumb = 42

localStorage.setItem('number', Mynumb)

console.log(localStorage.getItem('number'))

const obj = {
    name: 'Max',
    age: 50,
}

localStorage.setItem('person', JSON.stringify(obj));

console.log(localStorage.getItem('person'))


// promise

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing Data...')
        const obj = {
            port: 2000,
            server: 'aws',
            status: 'working'
        }

        resolve(obj);
    }, 2000)
});

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
});

const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body=null) {
    const headers = {
        'Content-Type' : 'application/json'
    }

    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }).then(response => {
        if(response.ok) {
            return response.json()
        }

        return response.json().then(error => {
            const e = new Error('Request')
            e.data = error
            throw e
        })
    })
}

const body = {
    name: 'Lewis',
    age: 20,
}

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.error(err))