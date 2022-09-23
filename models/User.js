const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Please enter email'],
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectsId,
                ref: 'Friend'
            }
        ]
    }
);

// virtual for length of the user's friends
UserSchema.virtual('friendCount').get(function() {
    return this.comments.reduce((total, friend) => total + comment.replies.length +1, 0);
});

// create the User model using the PizzaSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
