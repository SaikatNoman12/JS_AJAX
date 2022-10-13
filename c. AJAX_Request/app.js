/* ==== JavaScript AJAX request ==== */

// use javaScript GET request:---------
const demo = document.getElementById('demo');

function onLoad(callback) {
    const http = new XMLHttpRequest();

    http.onload = function () {
        console.log('finished');
        callback(this);
    }

    // use async js. true means async & false means synchronous;
    http.open('GET', './data/data.txt', true);

    http.send();

    console.log('start');
}


function functionOne(http) {

    const data = http.responseText;
    demo.innerHTML = data;

}
