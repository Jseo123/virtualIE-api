import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import userRoutes from './routes/user.routes';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('welcome to the new api');
});

app.use(userRoutes);
export default app;
