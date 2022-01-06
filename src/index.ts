import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession  from 'cookie-session';

import { AppRouter } from './appRouter';
import './controllers/login.contraller';

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({ keys: ['abcd'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3005, () => {
  console.log('App is listening on port 3005');
});