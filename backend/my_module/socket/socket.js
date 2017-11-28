exports.connectSocket = function(server,app){
	var jwt = require("jsonwebtoken");
	var io = require("socket.io")(server);

	var follower = require("../database/follower.js");
	follower.createCollection();
	var post = require("../database/post.js");
	post.createCollection();
	var post_topic = require("../database/post_topic.js");
	post_topic.createCollection();
	var topic = require("../database/topic.js");
	topic.createCollection();
	var user = require("../database/user.js");
	user.createCollection();
	var user_comment_post = require("../database/user_comment_post.js");
	user_comment_post.createCollection();
	var user_post = require("../database/user_post.js");
	user_post.createCollection();

	

	io.on("connection",function(socket){
		console.log("connected socket: " + socket.id);
		//dang ki
		

		socket.on("register",function(data){
			user.find(data).then(function(items) {
			  if (items.length == 0) {
			  	user.addCollection(data);

			  	var token = jwt.sign({
			            name:data.name,
			            nickName:data.nickName,
			            mail:data.mail,
			            phone:data.phone,
			            address:data.address			           
				  	}, 'FBGGJWTToken',{
				          expiresIn: '3d' // expires in 3 day
				        });

			  	socket.emit("register_res",{token:token});
			  }else {
			  	socket.emit("register_res",{msg:"that_bai"});
			  }
			});
		});

		socket.on("login",function(data){
			user.find(data).then(function(items){
				if (items.length == 0) {
					socket.emit("login_fail",0);
				}else{
					socket.emit("login_completd",1);
				}
			});
		});


	});

	io.on("disconnect",function(){
		console.log("disconnect "+ socket.id);
	});
};