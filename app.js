const express = require('express')
const axios = require('axios')
const app = express()

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', async (req, res) => {
    const {data} = await usersRender();
    res.render('home',{data});
});

app.get('/create', async (req, res) => {
    const {data} = await countriesRender();
    res.render('create',{data});
});

app.get('/update', async(req, res) => {
    const {data} = await countriesRender();
    res.render('update',{query: req.query, data});
});

  
app.get('*', (req, res) => {
    res.render('404');
})

async function usersRender(){
    return await axios.get('http://localhost:8000/api/users/');
}

async function countriesRender(){
    return await axios.get('http://localhost:8000/api/users/countries/');
}


app.listen(3000)