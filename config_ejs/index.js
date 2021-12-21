const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'))
// 1ª 'views' é a chave que a gente precisa setar para que o ejs consiga identificar em qual pasta estarão as views
// 2ª 'views: nome da pasta


app.set('view engine', 'ejs');
// Mostrando ao node qual template engine estamos utilizando

app.get('/', (req, res) => {

    res.render('user');

})


app.listen(3000, () => {

    console.log('Server running on 3000');

})