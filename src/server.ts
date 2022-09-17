import express from 'express'
import cors from 'cors'
import { routes } from './routes/routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(4444, () => console.log('server on 4444 port!'))