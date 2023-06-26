const express = require('express');
const path = require('path');

const app = express();
const port = 80;

//for serving static file
app.use('/static', express.static('static'));

//set the template engine as pug
app.set('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, 'views'))

//our pug demo endpoint
app.get('/demo', (req,res)=>{
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
})


app.get("/", (req,res)=>{
    res.send("This is home page of my first express app");
})

app.get("/about", (req,res)=>{
    res.send("This is about page of my first express app");
})
app.post("/about", (req,res)=>{
    res.send("This is post request about page of my first express app");
})

app.get("/this", (req,res)=>{
    res.status(404).send("this page is not found");
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})