
const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Tasks = mongoose.model('Tasks');


router.get('/list', (req, res) => {
	try {
		Tasks.find({ },(err, docs) => {
			console.log(docs);
			 res.send(docs);
		}).lean();
	}catch (err) {
		console.log('TasksController:/list ', err);
	}
});


router.post('/save', (req, res) => {
	try {		
		var tasks = new Tasks(req.body);		
		tasks.save((err, doc) => {
			console.log(doc);
			if (!err)
				return res.status(200).send({ result:'success', data:doc });
			else
				return res.status(400).send({ result:'failure', data:doc });
		});
	}catch (err) {
		 console.log('TasksController:/save', err );
	}
});

module.exports = router;
