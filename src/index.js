import http from 'http';
import path from 'path';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import expressValidator from 'express-validator';

import config from './config.json';
import controllers from './controllers';
import middlewares from "./middlewares";

let app = express();

app.server = http.createServer(app);

app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(session(config.session));
app.use(express.static(path.join(__dirname, 'public')));

app.use(middlewares);
app.use(controllers);

app.server.listen(config.port);

export default app;
