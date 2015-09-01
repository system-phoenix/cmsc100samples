var student = require('./../controllers/student');
var degree = require('./../controllers/degree');

module.exports = function(router){
	router.route('/students')
		.get(student.find)
		.post(student.insert);
		//.delete(student.delete);
	router.route('/students/:studentNo')
		.get(student.findOne);
		
	
	router.route('/degrees')
		.get(degree.find)
		.post(degree.insert)
		.put(degree.update);
	router.route('/degrees/:degree_id')
		.get(degree.findOne)
		.delete(degree.remove);
		
	return router;
};
