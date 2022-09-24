const { Thought, User } = require('../models');

const thoughtController = {
    // add thought
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
           
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id }},
                { new: true }
            );
        })
        .then(dbUserData => {
            console.log(dbUserData);
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id! '});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id! '});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    getThoughtById({ params}, res) {
        console.log(params)
        Thought.findOne({ thoughtId: params.id })
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
};


module.exports = thoughtController;