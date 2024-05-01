const { Schema } = require('mongoose');
const mongoose = require('mongoose')
const Reaction = require('./reaction');

const thoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        }
    ]
});

// virtual for reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length;
});

// getter method to format createdAt timestamp
thoughtSchema.path('createdAt').get(function(value) {
    return new Date(this.createdAt).toISOString();
});

const Thought = mongoose.model('Thoughts', thoughtSchema);

module.exports = Thought;