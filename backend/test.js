var jwt = require("jsonwebtoken");
tken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsIm5hbWUiOiJ0aWVuIiwibmlja05hbWUiOiJ0aWVuIiwibWFpbCI6InRpZW4iLCJwaG9uZSI6MTIzNDU2Nzg5LCJhZGRyZXNzIjoidGllbiIsInJhdHRpbmciOjMsImlhdCI6MTUxMTg1MjczMiwiZXhwIjoxNTExOTM5MTMyfQ.tP-r1hn8ijzMxN60eVO5fQK4moAuz3kJY_gf_0_9YGc";	
jwt.verify(tken,'FBGGJWTToken',function(err,decoded){
	console.log(decoded);
});

