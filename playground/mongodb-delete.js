const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to MongoDd');
	}
	console.log('connected to MongoDd');

	//deleteMany
	db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
		console.log(result);
	})

	//deleteOne
	db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	})
	
	//findOneAndDelete
	db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
		console.log(result);
	})
	//db.close();
}); 