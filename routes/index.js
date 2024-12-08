const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/calculate-bmi', (req, res) => {
    const { height, weight } = req.body;

    if (!height || !weight ) {
        return res.render('index', { error: 'Both height and weight are required!'})
    }

    const bmi = (weight / (height * height)).toFixed(2)
    res.render('result', { bmi })

})

module.exports = router;

