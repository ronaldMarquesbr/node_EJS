const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');





app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('user', {name: 'Igor oliveira', phone: '65465464'});

})


app.listen(3000, () => {

    console.log('Server running on 3000');

})