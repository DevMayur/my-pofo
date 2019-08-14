const express = require('express');
const hbs = require('hbs');
const app = express();


app.set('views',__dirname+'/pages');

app.set('view engine', 'hbs');



app.get('/',(req,res) => {
    res.render('index')
    })


app.listen(2020, ()=> console.log('Server is running on Port :2020'))
