const router = require('express').Router();
const { 
    addThought,
    getAllThoughts,
    getThoughtById
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
    .get(getThoughtById);
    


//

module.exports = router;