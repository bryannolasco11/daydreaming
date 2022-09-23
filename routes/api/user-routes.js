const router = require('express').Router();
const{
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
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

module.exports = router;

    