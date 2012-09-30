An example app for showing Cross-Origin Resource Sharing (CORS).
CORS allows clients from a different domain to access the services of another
domain without the need to use JSONP.

This is done by setting the header:

    Access-Control-Allow-Origin: *


The application supports the routes

    /
    get /facts
    get /facts/:id
    post /facts
    put /facts/:id
    delete /facts/:id

A resource, a fact, looks like this:

    {
        id: 1,
        fact: "Tapirs likes eating bananas"
    }


