
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = require('./schemas/User.js');
var User = mongoose.model('User', userSchema);


exports.createUserForm = function (req, res) {
	var val = req.session.userId;
	res.render("createUser", {
		user: val,
		title: "Express"
	});
};


exports.login = function (req, res) {
	var _ = require('underscore');
	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {
		var db = client.db('exercise');
		var emailForm = req.body.email;
		var passwordForm = req.body.password;
		var query = { email: emailForm };
		var collection = db.collection('users');
		collection.find(query).toArray(function (err, items) {
			if (items.length == 1) {
				bcrypt.compare(passwordForm, items[0].password, function (err, result) {
					if (result === true) {
						req.session.userId = items[0]._id;
						res.session = req.session;
						res.redirect(302, '/mens');
					} else {
						res.redirect(302, '/mens');
					}
				})
			}
		});
		client.close();

	});
};




exports.logout = function (req, res) {
	req.session.destroy();
	res.redirect(302, '/mens');
};

exports.loginForm = function (req, res) {
	var val = req.session.userId;
	res.render("login", {
		user: val,
		title: "Express"
	});
};

exports.update = function (req, res) {
	var _ = require('underscore');
	var productId = req.params.id;
	var ObjectID = require('mongodb').ObjectID;
	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	const client = new MongoClient(uri, { useNewUrlParser: true });
	var val = req.session.userId;
	var idSession = ObjectID(val);
	client.connect((err, client) => {
		var db = client.db('exercise');
		var query = { _id: idSession };
		var collection = db.collection('users');

		collection.find(query).toArray(function (err, res) {
			collection.update(query, {
				$push: {
					wishlist:

					{
						product_id: productId
					}

				}
			}
			);
			client.close();
		});
	});
};


exports.profile = function (req, res) {
	var _ = require('underscore');
	var ObjectID = require('mongodb').ObjectID;
	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	const client = new MongoClient(uri, { useNewUrlParser: true });
	var val = req.session.userId;
	var idSession = ObjectID(val);
	client.connect((err, client) => {
		var db = client.db('exercise');


		var query = { _id: idSession };
		var collection = db.collection('users');

		collection.find(query).toArray(function (err, items) {
			res.render("profile", {

				_: _,

				user: val,
				title: "Hello World!",
				items: items
			});

			client.close();
		});
	});
};


exports.createUser = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useNewUrlParser: true });
	var user = new User();
	user.name = req.body.name;

	user.email = req.body.email;
	user.password = req.body.password;
	bcrypt.hash(user.password, 10, function (err, hash) {
		if (err) {
			return console.log(err);

		}
		user.password = hash;

	});



	client.connect((err, client) => {

		var db = client.db('exercise');



		var collection = db.collection('users');

		collection.insertOne(user);
		client.close();
	});
	res.redirect(302, '/mens');

};


exports.mens = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;

		var query = { id: /^mens$/ };
		var collection = db.collection('categories');


		collection.find(query).toArray(function (err, items) {
			console.log(req.session);
			res.render("mens", {

				_: _,


				user: val,

				title: "Hello World!",
				items: items
			});

			client.close();
		});
	});
};



exports.womens = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;

	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;

		var query = { id: /^womens$/ }
		var collection = db.collection('categories');


		collection.find(query).toArray(function (err, items) {
			res.render("womens", {

				_: _,
				user: val,

				title: "Hello World!",
				items: items
			});

			client.close();
		});
	});
};



exports.mensClothing = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;


		var collection = db.collection('products');

		var query = { primary_category_id: /^mens-clothing*/ };

		collection.find(query).toArray(function (err, items) {
			res.render("mens-clothing", {

				_: _,
				user: val,

				title: "Hello World!",
				items: items

			});

			client.close();
		});
	});
};



exports.mensAccessories = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;


		var collection = db.collection('products');

		var query = { primary_category_id: /^mens-accessories*/ };

		collection.find(query).toArray(function (err, items) {
			res.render("mens-accessories", {

				_: _,
				user: val,

				title: "Hello World!",
				items: items

			});

			client.close();
		});
	});
};



exports.womensClothing = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;


		var collection = db.collection('products');

		var query = { primary_category_id: /^womens-clothing*/ };

		collection.find(query).toArray(function (err, items) {
			res.render("womens-clothing", {

				_: _,
				user: val,

				title: "Hello World!",
				items: items

			});

			client.close();
		});
	});
};

exports.womensAccessories = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;


		var collection = db.collection('products');

		var query = { primary_category_id: /^womens-accessories*/ };

		collection.find(query).toArray(function (err, items) {
			res.render("womens-accessories", {

				_: _,
				user: val,

				title: "Hello World!",
				items: items

			});

			client.close();
		});
	});
};




exports.womensJewelry = function (req, res) {
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;


		var collection = db.collection('products');

		var query = { primary_category_id: /^womens-jewelry*/ };

		collection.find(query).toArray(function (err, items) {
			res.render("womens-jewelry", {

				_: _,
				user: val,

				title: "Hello World!",
				items: items

			});

			client.close();
		});
	});
};


exports.product = function (req, res) {
	var pid = req.params.id;
	var _ = require('underscore');


	var MongoClient = require('mongodb').MongoClient;
	const uri =  'mongodb+srv://diogo:diogo@cluster0-4j82r.gcp.mongodb.net/test?retryWrites=true&w=majority';


	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect((err, client) => {

		var db = client.db('exercise');
		var val = req.session.userId;


		var collection = db.collection('products');

		var query = { id: pid };

		collection.find(query).toArray(function (err, items) {
			res.render("product", {

				_: _,
				user: val,

				title: "Hello World!",
				items: items

			});

			client.close();
		});
	});
};