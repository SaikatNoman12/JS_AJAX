/* === JavaScript AJAX introduction === */


// use AJAX
const demo = document.getElementById('demo');

function loadData() {
    // 1. create a new request;
    const xhr = new XMLHttpRequest();

    // 2. what to do when response arrives;
    xhr.onload = function () {

        // response data get a variable;
        const data = xhr.responseText;

        // show data;
        demo.innerHTML = data;

    }

    // 3. prepare request GET, POST, PUT, PATCH, DELETE, OPTION;
    xhr.open('GET', './data/data.txt');

    // 4. send request;
    xhr.send();
}