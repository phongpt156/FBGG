var user = require("./my_module/database/topic");

user.find({}).then(function(items){
	console.log(items);
});
