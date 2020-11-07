import express from 'express';
import morgan from 'morgan';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';

import databaseConnection from './config/db.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json);

databaseConnection();

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to unhandled promise rejection');
  server.close(() => {
    process.exit(1);
  });
});
