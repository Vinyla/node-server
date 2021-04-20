// Basic configuration for creating Node.js server wit Express Web Framework
import express from 'express';
import router from './router';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const PORT = 5000;

const app = express();
router(app);

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${PORT}`);
});
