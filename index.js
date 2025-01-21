const express=require('express');
const bodyParser = require('body-parser');
const app=express();
const port=3000;
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
});
