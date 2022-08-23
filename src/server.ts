import express from 'express'

const app = express()

app.use(express.json())

app.listen(4444, () => console.log('server on 4444 port!'))