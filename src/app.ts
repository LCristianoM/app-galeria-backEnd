import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';

const app = express();

import indexRoutes from './routes/index'

//setiings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use('/api', indexRoutes);

// carpeta que se usara para almacenar archivos publicos
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;