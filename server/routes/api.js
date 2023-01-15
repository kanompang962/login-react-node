const express = require('express')
const router = express.Router()


// controller
const {
    register,
    login,
    listUser,
    editUser,
    deleteUser
} = require('../controllers/auth')

// middleware
const {auth} = require('../middleware/auth')


// http://localhost:3000/api/
router.get('/', (req, res) => {
    res.send('Hello World!')
});

//@Endpoint  http://localhost:3000/api/register
//@Method    POST
//@Access    Private
router.post('/register', register);

//@Endpoint  http://localhost:3000/api/login
//@Method    POST
//@Access    Private
router.post('/login', login);

//@Endpoint  http://localhost:3000/api/1
//@Method    GET
//@Access    Private
router.get('/1',auth, (req, res)=>{
    res.send('Hello 1');
})






//@Endpoint  http://localhost:3000/api/auth
//@Method    GET
//@Access    Private
router.get('/auth', listUser);

//@Endpoint  http://localhost:3000/api/auth
//@Method    PUT
//@Access    Private
router.put('/auth', editUser);
//@Endpoint  http://localhost:3000/api/auth
//@Method    DELETE
//@Access    Private
router.delete('/auth', deleteUser);


module.exports = router;