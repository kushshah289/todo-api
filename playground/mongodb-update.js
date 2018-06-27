const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to MongoDd');
	}
	console.log('connected to MongoDd');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5b33de04e136ba438b2401a5')
	},{
		$set: {
			completed: true
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	//db.close();
}); 