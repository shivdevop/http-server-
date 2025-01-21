const express=require('express');
const bodyParser = require('body-parser');

//Load environment variables from .env file
require('dotenv').config();

const app=express();


const port=process.env.PORT;
const secretKey=process.env.SECRETKEY;

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('Hello  hi there');
});

app.post('/',(req,res)=>{
    console.log(req.body);
    res.json({
        msg: 'Hello from the server',
    })
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    console.log(`Secret key is ${secretKey}`);
});
