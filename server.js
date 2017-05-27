//basic imports
var express = require ('express');
var bodyParser = require ('body-parser');
var cors = require ('cors');

//instance of express, bodyparser and cors for the app
var app= module.exports=express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname));

app.listen(3000,function(){
	console.log('3000 is listening from parser');
});