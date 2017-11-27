exports.connectSocket = function(server,app){

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

	var obj_login;
		app.post("/api/login",function(req,res){
			obj_login = {
				mail:req.mail,
				password:req.password
			};
			user.find(obj_login).then(function(items){
				if (items.length == 0) {
			  		res.json({msg:"that bai"});
				}else {
				  	var token = jwt.sign({
				  		_id:items[0]._id,
			            name:items[0].name,
			            nickName:items[0].nickName,
			            mail:items[0].mail,
			            phone:items[0].phone,
			            address:items[0].address,
			            ratting:items[0].ratting
				  	}, 'FBGGJWTToken');
				  	return res.json({token: token});
				}	
			})
		});

	io.on("connection",function(socket){
		console.log("connected socket: " + socket.id);
		//dang ki
		

		socket.on("register",function(data){
			user.find(data).then(function(items) {
			  if (items.length == 0) {
			  	user.addCollection(data);
			  	socket.emit("register_completed",1);
			  }else {
			  	socket.emit("register_fail",0);
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