const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');


let users = [

    {
        id: 0, 
        name: 'Igor oliveira',
        phone: '132456'
    },

    {
        id: 0, 
        name: 'José silva',
        phone: '789456'
    },
    
    {
        id: 0, 
        name: 'Pedro luz',
        phone: '4568'
    }


]


app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('user', {users: users}); // poderia ser só {users}

})


app.listen(3000, () => {

    console.log('Server running on 3000');

})