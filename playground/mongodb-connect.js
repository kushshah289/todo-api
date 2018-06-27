const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('unable to connect to MongoDd');
	}
	console.log('connected to MongoDd');

	// db.collection('Todos').insertOne({
	// 	text: 'Something todo',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('unable to insert todo');
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	db.collection('Users').insertOne({
		name: 'Kush',
		age: 23,
		location: 'NY'
	}, (err, result) => {
		if(err){
			return console.log('unable to insert user', err);
		}

		console.log(result.ops);
	});
	db.close();
}); 