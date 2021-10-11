const mongoose = require('mongoose');

const BlockedServiceSchema = mongoose.Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
    },
    vendorName:{
        type: String,
        default:"vendor name here"
    },
    description: {
        type: String,
        default: 'description here'
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' 
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})


BlockedServiceSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

BlockedServiceSchema.set('toJSON', {
    virtuals: true,
});


exports.BlockedService = mongoose.model('blockedservice', BlockedServiceSchema);
exports.BlockedServiceSchema = BlockedServiceSchema;