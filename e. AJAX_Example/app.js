/* ==== JavaScript AJAX Example ==== */

// Use AJAX GET & POST method. This is a analog system:---------
const getBtn = document.querySelector('#get');
const postBtn = document.querySelector('#post');

const demo1 = document.querySelector('.demo');
const demo2 = document.querySelector('.demo2');

function loadData(method, url, postData) {

    const http = new XMLHttpRequest();

    http.onload = function () {

        if (this.status >= 400) {
            console.log('Sorry server is down. Application is not working!');
        }
        else {
            const data = this.responseText;
            console.log(JSON.parse(data));
        }

    }

    http.onerror = function () {

        console.log('Your net work connection is lost!');

    }

    http.open(method, url + '?t=' + Math.random(), true);

    http.send(postData);

}

// use for get data
function getData() {

    loadData('GET', 'https://jsonplaceholder.typicode.com/todos/1');

}

// use for post data
function postData() {

    console.log('post worked!');

    const postData = {
        title: 'Abu',
        body: 'Ahmed',
        userId: 1,
    };

    loadData('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify(postData));

}

// use event listener;
getBtn.addEventListener('click', getData);

postBtn.addEventListener('click', postData);


/* ----------------------------- x ----------------------------- */


// Use AJAX GET & POST method. This is a running system:---------
const getBtn2 = document.getElementById('get2');
const postBtn2 = document.getElementById('post2');

const demo3 = document.querySelector('.demo3');
const demo4 = document.querySelector('.demo4');


function loadData2(method, url, post) {

    // use Promise;
    const promise = new Promise((resolve, reject) => {

        // create request;
        const http = new XMLHttpRequest();

        // load data;
        http.onload = function () {

            // error handle;
            if (this.status >= 400) {
                resolve(`Sorry Your application problem. ${this.status}`);
            }
            else {
                resolve(this.response);
            }

        }

        // network error handle;
        http.onerror = function () {
            reject('This is a network related error!');
        }

        http.open(method, url + '?t=' + Math.random(), true);

        http.responseType = 'json';

        http.send(post);

    });

    // return promise;
    return promise;
}


// GET data function;
function getData2() {

    // load data2
    loadData2('GET', 'https://jsonplaceholder.typicode.com/todos/')
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((err) => {
            console.log(err);
        });

}

// POST data function;
function postData2() {

    // post data;
    const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    // load data2
    loadData2('POST', 'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(postData))
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((err) => {
            console.log(err);
        });
}

// btn event listener;
getBtn2.addEventListener('click', getData2);
postBtn2.addEventListener('click', postData2);