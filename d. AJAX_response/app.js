/* === JavScript AJAX response & request headers === */


// use AJAX Get method:---------
const demo = document.querySelector('.demo');

function onLoad(callback) {

    const http = new XMLHttpRequest();

    http.onload = function () {

        callback(this);

    }

    http.open('GET', './data/data.txt?t=' + Math.random(), true);

    http.setRequestHeader('My-GF', 'JavaScript. She is very smart. She is very nice.');

    http.send();

}


function functionOne(http) {

    const httpData = http.responseText;

    demo.innerHTML = ` 
    ${httpData}
    <h1>This is all Response Headers Data</h1>
    <p class='response'>${http.getAllResponseHeaders()}</>
    <h1>This is Specific Response Header Data</h1>
    <p class="response">Date: ${http.getResponseHeader('Date')}</p>
    `;



}
