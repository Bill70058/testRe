const express = require('express');
const bodyparser = require('body-parser');

const server = express();

server.listen(1234);

server.use(bodyparser.urlencoded({}));

server.use('./login',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    console.log(req.query);
    res.send({ok:1});
});