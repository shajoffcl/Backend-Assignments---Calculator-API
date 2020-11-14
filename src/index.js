const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/add', (req,res)=>{
    const response={
        status: "success",
        message: "the sum of given two numbers",
        sum: req.body.num1+req.body.num2
    }
    res.send(response);
});

app.post('/sub', (req, res)=>{
    const response={
        status: "success",
        message: "the difference of given two numbers",
        difference: req.body.num1-req.body.num2
    }
    res.send(response);
});

app.post('/multiply', (req, res)=>{
    const response={
        status: "success",
        message: "The product of given numbers",
        result: req.body.num1*req.body.num2
    }
    res.send(response);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;