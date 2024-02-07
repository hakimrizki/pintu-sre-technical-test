const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    let weight = parseFloat(req.query.weight)
    let height = parseFloat(req.query.height)
    let bmi = ((weight) / (height * height / 10000)).toFixed(1) // weight in kg & height convert from cm2 to m2

    if(bmi > 25 && bmi <= 29.9){
        res.send({
            'bmi': bmi,
            'label': 'overweight'
        });
    } else if(bmi > 18.5 && bmi <= 24.9){
        res.send({
            'bmi': bmi,
            'label': 'normal'
        });
    } else if(bmi < 18.5){
        res.send({
            'bmi': bmi,
            'label': 'underweight'
        });
    } else {
        res.send({
            'bmi': bmi,
            'label': 'obese'
        });
    }
});

app.get('/ping', function(req, res){
    res.send({
        'code': '200',
        'message': 'pong'
    });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
