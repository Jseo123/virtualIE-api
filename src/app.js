import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes'

const app = express();
app.use(morgan('dev'));

app.get('/', (re, res) => {
    res.json('welcome to the new api')
})

app.use(userRoutes)
export default app;