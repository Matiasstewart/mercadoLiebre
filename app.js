const express = require('express');
const app = express();
const path = require('path');
const publicpath = path.resolve (__dirname, './public');

app.use (express.static(publicpath));

app.listen(process.env.PORT || 3070, () => {
    console.log('Servidor corriendo en http://localhost:3070/ !');
});

app.get('/', (req, res) => {
    res.sendFile (path.resolve (__dirname , 'views/home.html'))
});

app.get('/register', (req, res) => {
    res.sendFile (path.resolve (__dirname , 'views/register.html'))
});