var topic = require("./my_module/database/topic");
// topic.addCollection({name:"games"});
// topic.addCollection({name:"Công nghệ thông tin"});
// topic.addCollection({name:"Khoa học"});
// topic.addCollection({name:"Ý tế"});
// topic.addCollection({name:"Môi trường"}); 
topic.find({}).then(function(items){
	console.log(items);
})