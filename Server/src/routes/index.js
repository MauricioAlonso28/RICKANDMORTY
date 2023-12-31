const router = require('express').Router()
const { getCharById } = require('../controllers/getCharById')
const { postFav, deleteFav } = require('../controllers/handleFavorites');

router.get('/character/:id', (req, res) => {
    getCharById(req, res)
})

router.post('/fav', (req, res) => {
    postFav(req, res)
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res)
})

module.exports = router