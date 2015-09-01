var db = require(__dirname + './../lib/mysql');

exports.find = function(req, res, next){
	db.query("select * from student", function(err, rows){
		if(err) return next(err);
		res.send(rows);
	});
};

exports.insert = function(req, res, next){
	db.query("insert into student (lastName, firstName, studentNo, birthday, course, college) values (?, ?, ?, ?, ?, ?)",
	[req.body.lastName, req.body.firstName, req.body.studentNo, req.body.birthday, req.body.course, req.body.college], function(err, rows){
		if(err) return next(err);
		res.send(rows);	
	});
};/**/

exports.findOne = function(req, res, next){
	db.query("select * from student where studentNo='" + [req.params.studentNo] + "'", function(err, rows){
		if(err) return next(err);
		if(rows.length === 0) {
			//res.send(404, {message: "student not found"});
			res.status(404).send({message: "student not found"});
		}
		else{
			res.send(rows[0]);
		}
	});
};

/*exports.deleteOne = function(req, res, next){
	db.query("delete from student where studentNo like '?'", [req.body.studentNo], function(err, rows){
		var num = res.affectedRows;
		if(err) return next(err);
		if(num === 0){
			res.status(404).send({message: "student not found"});
		}
		else res.send(num);
	});
};
/**/
