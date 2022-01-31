# express-brew

A teapot shall not brew coffee.

## Description

This is a express middleware which assures the http requisition will not try to brew a coffee, responding with a bad request status 418, because *A teapot shall not brew coffee*.

## How to use it:

``` 
// import express
const express = require('express');

// import express-brew
const brew = require('express-brew');

// start express
const app = express();

// set express-brew;
app.use(brew);

// start server
app.listen(PORT);
```

Now if you receive a request with a body which contains a "brew_coffee" key which is not *false*, your server will return a response with status 418 and a message "I'm a teapot, no coffee here."
