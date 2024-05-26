const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    console.log('hello from express');
    res.status(200);
    // res.json({message: 'hello'})
    res.sendFile(path.resolve('pages/index.html'))
})

module.exports = app