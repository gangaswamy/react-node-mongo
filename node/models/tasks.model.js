
const mongoose = require('mongoose');
var tasksSchema = new mongoose.Schema( {	
		task : { type : String },	
	});

mongoose.model( 'Tasks', tasksSchema );
