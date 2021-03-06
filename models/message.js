let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let messageSchema = Schema({
    roomId: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    body: {
        type: String
    },
    files: [{
        type: Schema.Types.ObjectId,
        ref: 'File'
    }], 
    status: {
        type: Boolean,
        default: false
    }
}, {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    }
);

let Message = module.exports = mongoose.model('Message', messageSchema);