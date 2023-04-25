const mongoose = require('mongoose');

const connectDB = (uri) => {
	return mongoose.connect(uri, {
		dbName: '11-AUTH-WORKFLOW',
	});
};

module.exports = connectDB;
