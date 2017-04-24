/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import * as express from 'express';
import { NestFactory } from 'nest.js';
import * as bodyParser from 'body-parser';
import { AppModule } from './modules/app.module';

const conf = dotenv.config();
dotenvExpand(conf);

const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(AppModule, instance);
app.listen(9000, () => {
  console.warn('App is listening on port 9000');
});
