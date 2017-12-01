var mongo_client = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/data_fbgg";
var mang = [];

mongo_client.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("post").find().toArray(function(err,res){
		console.log(res);
		db.close();
	})
});
 
