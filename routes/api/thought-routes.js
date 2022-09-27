const router = require('express').Router();
const { 
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought)
    
// /api/thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    


// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reaction')
    .post(addReaction)
    
// /api/thoughts/<thoughtId>/reactions/<reactionId>
router
    .route('/:thoughtId/reaction/:reactionId')
    .delete(deleteReaction);

module.exports = router;