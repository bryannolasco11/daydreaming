const router = require('express').Router();
const { 
    addThought,
    getAllThoughts
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

//

module.exports = router;