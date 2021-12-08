const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.listen(3000, function() {
    console.log('Server running on port 3000');
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/sum", function(req, res) {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    console.log(req.body);
    // const result = num1 + num2;
    console.log(num1 + num2);
    const result = {
        result: num1 + num2
    };
    res.json(result);
});