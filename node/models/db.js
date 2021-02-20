
const mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost:27017/TasksDB', { 
	 useNewUrlParser: true, 
	 useUnifiedTopology: true 
	},
	(err) => { console.log('DB connection: ' + err); }
);

require('./tasks.model');

