console.log('Request data ...');

// setTimeout(() => {
//     console.log('Preparing data...');

//     const backEnd = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backEnd.modefied = true
//         console.log('Data received', backEnd)
//     }, 2000)
// }, 2000);


// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data ...');
//         const backEnd = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         };
//         resolve(backEnd)
//     }, 2000)
// });

// p.then(data => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true
//                 resolve(data)
//             }, 2000)
//         });
//     }).then(clientData => {
//         console.log('Promise resolved', clientData)
//         clientData.fromPromise = true
//         return clientData
//     }).then(data => {
//         console.log('Modified', data)
//     }).catch(err => console.err('Error: ', err))
//     .finally(() => console.log('Finally'))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
};

// sleep(2000).then(() => console.log('After 2s'))
// sleep(3000).then(() => console.log('After 3s'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promise');
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log("Race promises");
}); 