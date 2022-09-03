const express = require('express')
const router = express.Router()
const wishesController = require('../controllers/wishes')
const {ensureAuth} = require('../middleware/auth')

// www.myproject.com/wishes/

router.get('/', ensureAuth, wishesController.getWishes )
router.post('/addWish', wishesController.makeWish)
router.put('/markWishGranted', wishesController.markGranted)
router.put('/markWishing', wishesController.markWishing)
router.delete('/deleteWish', wishesController.deleteWish)

module.exports = router