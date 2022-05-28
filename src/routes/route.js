const express = require('express')
const router = express.Router()

const { createUser, loginUser, profileDetails, updateUser } = require('../controllers/userController')
const {createProduct, getProduct, getProductById, updateProduct, deleteProductById} = require('../controllers/productController')
const {postCart} = require('../controllers/cartController')
const {authentication} = require("../middlewares/auth")

// 1. User
router.post('/register', createUser) 
router.post('/login', loginUser)
router.get("/user/:userId/profile",authentication,profileDetails)
router.put("/user/:userId/profile", authentication,updateUser )

// 2. Product
router.post('/products', createProduct)
router.get('/products', getProduct)
router.get('/products/:productId', getProductById)
router.put('/products/:productId', updateProduct)
router.delete('/products/:productId', deleteProductById)

// 3. Cart
router.post('/users/:userId/cart',postCart)








/*------------------------------------------if api is invalid OR wrong URL----------------------------------------------------------*/

router.all("/**", function (req, res) {
    res.status(404).send({ status: false, msg: "The api you request is not available" })
})

module.exports = router