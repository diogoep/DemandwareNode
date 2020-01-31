exports.index = function(req, res) {
	res.render("index", { 
		// Template data
		title: "Express" 
	});
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
	
		if(err)
    {
        console.log(err);
    }
    else
    {
		console.log("Connected to db");}
		
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
	
		if(err)
    {
        console.log(err);
    }
    else
    {
		console.log("Connected to db");}
		
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
	
		if(err){
        	console.log(err);
    	}else{
			console.log("Connected to db");
		}
		
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

		if(err){
        	console.log(err);
    	}else{
			console.log("Connected to db");
		}
		
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
	
		if(err)
    {
        console.log(err);
    }
    else
    {
		console.log("Connected to db");}
		
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
	
		if(err){
			console.log(err);
		}else{
			console.log("Connected to db");
		}
		
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
	
		if(err){
			console.log(err);
		}else{
			console.log("Connected to db");
		}
		
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