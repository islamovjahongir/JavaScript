console.log("Start");

console.log("Start second");

function setTime () {
    console.log("The second function will come after 5000 second");
}

setTimeout(setTime, 5000)

window.setTimeout(function  (){
    console.log("This function will come after 2s econd");
}, 0);

console.log("The last console")