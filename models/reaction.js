const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 
reactionSchema.path('createdAt').get(function(value) {
    return new Date(value).toISOString();
})

module.exports = model('Reaction', reactionSchema);