exports.index = function(req, res) {
	res.render("index", { 
		// Template data
		title: "Express" 
	});
};

exports.createUserForm = function(req, res) {
	res.render("createUser", { 
		// Template data
		title: "Express" 
	});
};


exports.loginForm = function(req, res) {
	res.render("login", { 
		// Template data
		title: "Express" 
	});
};


exports.login = function(req, res) {
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {
		// Client returned
		var db = client.db('exercise');
	
		/*if(err){
        	console.log(err);
    	}else{
			console.log("Connected to db");
		}*/
		var emailForm = req.body.email;
		var passwordForm = req.body.password;
		var query = { email: emailForm};
		var collection = db.collection('users');
		//const collection = db.collection("categories");

		//user = collection.find(query).toArray();
		//console.log(user.email);
		collection.find(query).toArray(function(err, items) {
			if(items.length=1){
				console.log(items[0]);
				//client.close();
		
			//console.log(user.email);
				bcrypt.compare(passwordForm, items[0].password, function(err, result){
					if(result === true){
						console.log("verdade");
						req.session.userId = items[0]._id;
						res.redirect(302, '/hello');
					  	//return callback(null, user);
					}else{
						console.log("else");
					  	//return callback();
					}
				  })
				}
			});
		client.close();
		});
	};



var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema(
	[
		{
			name: String,
			email: String,
			password: String
		,wishlist:
			[	
				{
					product_id: String
				}
			]
				
		}
	]
);
	

	var User = mongoose.model('User', userSchema);
	//module.exports = User;
	
	
exports.createUser =  function(req, res){	
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	var user = new User();
	user.name = req.body.name;
	//user.city = req.body.city;
	user.email = req.body.email;
	user.password = req.body.password;
	bcrypt.hash(user.password,10, function(err, hash){
		if (err) {
			return console.log(err);
			//next(err);
		}
		  user.password = hash;
		  //next();
		});
		//console.log(user.name);
		//console.log(user.email);
		//console.log(user.password);
		client.connect(  (err, client) => {
			// Client returned
			var db = client.db('exercise');
		
			/*if(err){
				console.log(err);
			}else{
				console.log("Connected to db");
			}*/
			
			var collection = db.collection('users');
			//const collection = db.collection("categories");
			collection.insertOne(user);/*
			collection.find().toArray(function(err, items) {
				res.render("hello", { 
					// Underscore.js lib
					_     : _, 
					
					// Template data
					title : "Hello World!",
					items : items
				});
			*/
			client.close();
		});
		res.redirect(302, '/hello');
		/*
	user.save(function(err, user){
		if(err) return err;
		res.send(user); 
	});*/
};


exports.hello = function(req, res) {
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(  (err, client) => {
		// Client returned
		var db = client.db('exercise');
	
		/*if(err){
        	console.log(err);
    	}else{
			console.log("Connected to db");
		}*/
		
		var collection = db.collection('categories');
		//const collection = db.collection("categories");

		collection.find().toArray(function(err, items) {
			res.render("hello", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
			});

		client.close();
		});
	});
};



exports.mensClothing = function(req, res) {
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(  (err, client) => {
		// Client returned
		var db = client.db('exercise');
	
		/*if(err){
        	console.log(err);
    	}else{
			console.log("Connected to db");
		}*/
		
		var collection = db.collection('products');
		//const collection = db.collection("categories");
		var query = { primary_category_id: /^mens-clothing*/ };
		//collection.find()
		collection.find(query).toArray(function(err, items) {
			res.render("mens-clothing", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
				//picture : items.find({'link':})
			});

		client.close();
		});
	});
};



exports.mensAccessories = function(req, res) {
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(  (err, client) => {
		// Client returned
		var db = client.db('exercise');
	
		/*if(err){
        	console.log(err);
    	}else{
			console.log("Connected to db");
		}*/
		
		var collection = db.collection('products');
		//const collection = db.collection("categories");
		var query = { primary_category_id: /^mens-accessories*/ };
		//collection.find()
		collection.find(query).toArray(function(err, items) {
			res.render("mens-accessories", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
				//picture : items.find({'link':})
			});

		client.close();
		});
	});
};



exports.womensClothing = function(req, res) {
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(  (err, client) => {
		// Client returned
		var db = client.db('exercise');

		/*if(err){
        	console.log(err);
    	}else{
			console.log("Connected to db");
		}*/
		
		var collection = db.collection('products');
		//const collection = db.collection("categories");
		var query = { primary_category_id: /^womens-clothing*/ };
		//collection.find()
		collection.find(query).toArray(function(err, items) {
			res.render("womens-clothing", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
				//picture : items.find({'link':})
			});

		client.close();
		});
	});
};

exports.womensAccessories = function(req, res) {
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(  (err, client) => {
		// Client returned
		var db = client.db('exercise');
	
		/*if(err){
			console.log(err);
		}else{
			console.log("Connected to db");
		}*/
		
		var collection = db.collection('products');
		//const collection = db.collection("categories");
		var query = { primary_category_id: /^womens-accessories*/ };
		//collection.find()
		collection.find(query).toArray(function(err, items) {
			res.render("womens-accessories", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
				//picture : items.find({'link':})
			});

		client.close();
		});
	});
};




exports.womensJewelry = function(req, res) {
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(  (err, client) => {
		// Client returned
		var db = client.db('exercise');
	
		/*if(err){
			console.log(err);
		}else{
			console.log("Connected to db");
		}*/
		
		var collection = db.collection('products');
		//const collection = db.collection("categories");
		var query = { primary_category_id: /^womens-jewelry*/ };
		//collection.find()
		collection.find(query).toArray(function(err, items) {
			res.render("womens-jewelry", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
				//picture : items.find({'link':})
			});

		client.close();
		});
	});
};


exports.product = function(req,res){
	var pid = req.params.id;
	var _         = require('underscore');
	//require('bootstrap');
	//require('jquery');
	var MongoClient = require('mongodb').MongoClient;
	const mdbClient = require('mongodb').MongoClient;
	const uri = 'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	//const uri = "mongodb://diogo:diogo@cluster0-4j82r.gcp.mongodb.net:27017/exercise";
	//const uri = "mongodb://diogo:diogo@cluster0-shard-00-01-4j82r.gcp.mongodb.net:27017/exercise"; 
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(  (err, client) => {
		// Client returned
		var db = client.db('exercise');
	
		/*if(err){
			console.log(err);
		}else{
			console.log("Connected to db");
		}*/
		
		var collection = db.collection('products');
		//const collection = db.collection("categories");
		var query = { id: pid };
		//collection.find()
		collection.find(query).toArray(function(err, items) {
			res.render("product", { 
				// Underscore.js lib
				_     : _, 
				
				// Template data
				title : "Hello World!",
				items : items
				//picture : items.find({'link':})
			});

		client.close();
		});
	});
  };