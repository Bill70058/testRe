const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();


server.listen(1234);

server.use(bodyParser.urlencoded({}));

server.use('/login',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    console.log(req.query);
    res.send({ok:1});
});

