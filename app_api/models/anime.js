var mongoose = require('mongoose');

var ratingSchema = new mongoose.Schema({
	rating: {
		type: Number,
		required: true,
		min: 1,
		max: 5
	},
	createdOn: {
		type: Date,
		"default": Date.now
	}
});

var animeSchema = new mongoose.Schema({
	animeId: {
		type: Number,
		required: true
	},
	year: String,
	season: String,
	ratings: [Number],
	averageRating: {
		type : Number,
		"default": 0
	},
	//include comments here?
	createdOn: {
		type: Date,
		"default": Date.now
	}
});

// pre hook for 'findOneAndUpdate'
animeSchema.pre('findOneAndUpdate', function(next) {
	this.options.runValidators = true;
	next();
});

mongoose.model('Anime', animeSchema);
mongoose.model('Rating', ratingSchema);