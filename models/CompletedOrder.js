const mongoose = require('mongoose');

const completedOrderSchema = mongoose.Schema({
    vendorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
    },
    amount: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    dateCompleted: {
        type: Date,
        default: Date.now,
    },
    totalDuration: {
        type: String,
        default: '',
    },
    serviceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service'
    },
    location: {
        type: String,
        default: '',
    },
    
    
})


completedOrderSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

completedOrderSchema.set('toJSON', {
    virtuals: true,
});

mongoose.model('CompletedOrder', completedOrderSchema);