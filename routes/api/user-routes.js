const router = require('express').Router();
const{
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend
} = require('../../controllers/user-controller');

// Set up Get all, and Post at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//Set up get by id, put, and delete at /api/users/:id
router
     .route('/:id')
     .get(getUserById)
     .put(updateUser)
     .delete(deleteUser);
// /api/users/:userid/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)

module.exports = router;

    