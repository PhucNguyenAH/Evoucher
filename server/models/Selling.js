const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellingSchema = mongoose.Schema(
	{
		productName: {
			type: String,
		},
		productId: {
			type: String,
		},
		userId: {
			type: String,
		},
		quantity: {
			type: Number,
			default: 0,
		},
		cash: {
			type: Number,
			default: 0,
		},
		shopId: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Selling = mongoose.model('Selling', sellingSchema);

module.exports = { Selling };
