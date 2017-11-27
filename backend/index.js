var express = require("express");
var app = express();
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bodyParser = require("body-parser");
var port = 3000;

app.use(express.static("public"));
app.use(cors());
app.options('*',cors());
app.set("view engine","ejs");
app.set("views","./views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = require("http").Server(app);

server.listen(port,"0.0.0.0",function(){
	console.log("connection port: " + port);
});

var user = require("./my_module/database/user.js");
user.createCollection();
// user.find({mail:"tien",password:"nam"}).then(function(items) {
//   console.log(items);
// });


var router = require("./my_module/router/router.js");
router.routers(app);

var socket = require("./my_module/socket/socket.js");
socket.connectSocket(server,app);