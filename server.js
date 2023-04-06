const express = require('express');
const app = express();

const http = require('http').createServer(app);

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('Hello World');
})

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})