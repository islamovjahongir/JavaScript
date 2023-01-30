const requestUrl = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.response >= 400) {
                // console.error(xhr.response)

                reject(xhr.response)
                // reject изпользуем тогда когда у нам ошибка
            } else {
                // console.log(xhr.response)

                resolve(xhr.response)
                // resolve изпользуем тогда когда все без ошибки
            };
            // console.log(JSON.parse(xhr.response))
        };

        xhr.onerror = () => {
            reject(xhr.response)
        };

        xhr.send(JSON.stringify(body));
    });
};

const body = {
    name: 'Vladelin',
    age: 23,
}

// sendRequest('POST', requestUrl)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

sendRequest('POST', requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))