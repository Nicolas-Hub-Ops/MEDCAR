import express from 'express';
import connectDatabase from './config/database.js';
import morgan from 'morgan';
import router from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import error404 from './middlewares/error404.js';

await connectDatabase();

const app = express();
app.use(morgan('dev'));

router(app);

app.use(error404);
app.use(errorHandler);


export default app;