# JavaScript AJAX Request

## XMLHttpRequest method:

    new XMLHttpRequest();

    open(method, url, async);

    abort();

    send();

    send(string);

    getAllResponseHeader();

    getResponseHeader(key);

    setRequestHeader(key, value);

## Important:

### Get a cached result. To avoid this cached result. And always get updated data.

    open(method, url + Math.radom(), async);

