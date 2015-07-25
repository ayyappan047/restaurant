'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Restaurant Schema
 */
var RestaurantSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Restaurant name',
		trim: true
	},
	address: {
		type: String,
		default: '',
		required: 'Please fill Restaurant address',
		trim: true
	},
	contact: {
		type: String,
		default: '',
		required: 'Please fill Restaurant contact number',
		trim: true
	},
	cuisine: {
		type: String,
		default: '',
		required: 'Please fill Restaurant cuisine',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Restaurant', RestaurantSchema);