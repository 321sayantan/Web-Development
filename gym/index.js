const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  //for serving static file
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')  //set the template engine as pug
app.set('views', path.join(__dirname, 'views'))  //set the views directory

//ENDPOINTS
app.get('/',(req,res)=>{
    const con= 'This is the best website using pug'
    const params = {'title': 'this is a website using pug', 'content': con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const more = req.body.more;
    let datatowrite = `The the name of the client is ${name}, age is ${age}, gender is ${gender}, address is ${address}, and more :${more}`;

    fs.writeFileSync('output.txt', datatowrite)

    console.log(req.body)
    const param = {'message': 'Your form has been submitted successfully'}
    // res.status(200).render('index.pug', param);
    res.send('post method running');
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})