const mongoose = require('mongoose');

const complaintOrderSchema = mongoose.Schema({
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
        
        
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
        
    },
    vendorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
        
    },
vendorName:{
    type:String,
    default:'hamza'
},
type:{
    type:String,
    default:'lazy'
},
description:{
    type:String,
    default:'so bad attitude what the hell are u giving to us'
},
image:{
    type:String,
    default:'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
},
serviceTitle:{
    type:String,
    default:'car check up'
}
    ,
   
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    remarks:{
        type:String,
        default:'Actually u r wrong'
    },status:{
        type:String,
        default:'Not Checked'
    }
})

complaintOrderSchema .virtual('id').get(function () {
    return this._id.toHexString();
});

complaintOrderSchema.set('toJSON', {
    virtuals: true,
});


exports.Complaint = mongoose.model('complaintOrder', complaintOrderSchema );
