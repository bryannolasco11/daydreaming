const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        //custom id to avoid confusion with comment id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

module.exports = reactionSchema;