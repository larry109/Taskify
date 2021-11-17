require('./config/config.ts');
const express = require('express');
var app = express();


app.get('/api/:paramID1/:paramID2',function(req, res){
    return res.json({ A: 'Taskify' });
});

app.listen(process.env.PORT, () => console.log(`Le server demarre sur le port : ${process.env.PORT}`));