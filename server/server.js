import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
import mugsRouter from './routes/mugsRoutes.js';



dotenv.config();


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', mugsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(favicon(path.resolve('public', 'mug.png')));
  app.use(express.static('public'));
  app.get('/*', (_, res) => res.sendFile(path.resolve('public', 'index.html')));
}

app.listen(PORT, () => {
  console.log(`☕ Server running at http://localhost:${PORT}`);
});
