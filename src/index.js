const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello world!");
});

app.post('/add', (req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    let sum=num1+num2;
    if(typeof num1==="string" || typeof num2==="string"){
        const result={
            status:"error",
            message:"Invalid data types"
        }
        res.send(result);
        return;
    }else if(sum>1000000){
        const result={
            status:"error",
            message:"Overflow"
        }
        res.send(result);
        return;
    }
    const result={
        status:"success",
        message:"the sum of given two numbers",
        sum:sum
    }
    res.send(result);
});

app.post('/sub', (req, res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    let diff=num1-num2;
    if(typeof num1==="string" || typeof num2==="string"){
        const result={
            status:"error",
            message:"Invalid data types"
        }
        res.send(result);
        return;
    }else if(diff<-1000000){
        const result={
            status:"error",
            message:"Underflow"
        }
        res.send(result);
        return;
    }
    const response={
        status: "success",
        message: "the difference of given two numbers",
        difference: diff
    }
    res.send(response);
});

app.post('/multiply', (req, res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    let mul=num1*num2;
    if(typeof num1==="string" || typeof num2==="string"){
        const result={
            status:"error",
            message:"Invalid data types"
        }
        res.send(result);
        return;
    }else if(mul>1000000){
        const result={
            status:"error",
            message:"Overflow"
        }
        res.send(result);
        return;
    }
    const response={
        status: "success",
        message: "The product of given numbers",
        result: mul
    }
    res.send(response);
});

app.post('/divide', (req, res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    if(typeof num1==="string" || typeof num2==="string"){
        const result={
            status:"error",
            message:"Invalid data types"
        }
        res.send(result);
        return;
    }else if(num2===0){
        const result={
            status:"error",
            message:"Cannot divide by zero"
        }
        res.send(result);
        return;
    }
    const response={
        status: "success",
        message: "The division of given numbers",
        result: num1/num2
    }
    res.send(response);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;