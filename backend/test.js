var mongo_client = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/data_fbgg";
var mang = [];

var user = require("./my_module/database/user");

mongo_client.connect(url, function(err, db) {
	if (err) throw err;
	db.collection("post").find().sort({_id:-1}).limit(5).toArray(function(err, result) {
	  if (err) throw err;
	  for(let i in result){
		//   console.log(result[i]);
		var user_post;
			user.find({_id:result[i].user_id}).then(function(items){

				db.collection("user_comment_post").find({post_id:result[i]._id}).sort({_id:-1}).limit(2).toArray(function(err,res){
					if (err) {
						throw err;
					}
					var data = {
						post: result[i],
						comment:res,
						user_post:items
					};
					console.log(data);			
					db.close();
					});

			});
		  
		}
		
	});
  });
