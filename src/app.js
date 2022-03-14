const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// read the csv file
const users = require('./users.json');

app.get('/',(req,resp) => {
    resp.json({message:'Call /users to get all the users'});
})

app.get('/users',(req,response) => {
    response.json({users});
})

app.listen(PORT,() => console.log('server running at ',PORT));