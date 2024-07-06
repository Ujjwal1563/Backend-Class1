const express = require('express');
const app = express();

const bodyParser =  require('body-parser');

//specifically parse json data & add it to the req.body object
app.use(bodyParser.json())

app.listen(3000,()=>{
    console.log("Server started at port 3000");
});

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully");
});

