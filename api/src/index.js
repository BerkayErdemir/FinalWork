const express = require('express');

const server = express();

const PORT = 1234;

server.get('/', function (req, res) {

    res.send('hello there')
});

server.listen(PORT, () => {

    console.log('listening to port 1234')
});