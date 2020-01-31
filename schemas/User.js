
var mongoose = require('mongoose');

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
	
