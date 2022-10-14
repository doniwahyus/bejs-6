const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'trying to deploy'
    })
})

app.use((req, res, next) => {
    return res.status(404).json({
        status: false,
        message: '404 not found!'
    })
})

app.use((err, req, res, next) => {
    return res.status(500).json({
        status: false,
        message: err.message
    })
})

app.listen(port, () => { console.log(`listening on port ${port}`) })