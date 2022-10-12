/* === JavaScript AJAX XMLHttpRequest === */


// use XMLHttpRequest() and Multiple Callback Functions:---------
function loadData(callback) {

    // step-1: Create an new XMLHttpRequest();
    const hxs = new XMLHttpRequest();

    // step-2: Define callback function;
    hxs.onload = function () {
        callback(this);
    }

    // step-3: open the XMLHttpRequest object;
    hxs.open('GET', './data/data.txt');

    // this is show dev tool inner network request headers; 
    hxs.setRequestHeader('MY-GF', 'JavaScript, Angular, NodeJs, ReactJS');


    // step-4: send a request to a server;
    hxs.send();

    // hxs.abort()  this is cancels the current request;


}


// first callback function;
let demo1 = document.querySelector('.demo');
function functionOne(hxs) {
    const data = hxs.responseText;
    demo1.innerHTML = data;
    // return all response headers property. This is show dev tool inner network; 
    console.log(hxs.getAllResponseHeaders());
}


// first callback function;
let demo2 = document.querySelector('.demo2');
function functionTwo(hxs) {

    const data = hxs.responseText;
    demo2.innerHTML = data;

    // return specific response header property. This is show dev tool inner network; 
    console.log(hxs.getResponseHeader('Date'));

}
