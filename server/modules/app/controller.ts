/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { Request, Response } from 'express';
import { Controller, Get, Post/*, Put, Delete*/ } from 'nest.js';
import * as HS from 'http-status-codes';
import { IFirebaseApp } from 'common/models/firebaseApp';
import { FirebaseAppService } from './service';

@Controller({ path: '/apps' })
class FirebaseAppController {
  constructor(private firebaseAppService: FirebaseAppService) { }

  @Post()
  public async addApp(req: Request, res: Response) {
    const app: IFirebaseApp = await this.firebaseAppService.createApp(req.body);
    res.status(HS.CREATED).header('Location', `${req.host}/api/apps/${app._id}`).send();
  }

  @Get()
  public async listApp(_: Request, res: Response) {
    const apps = await this.firebaseAppService.findAll();
    res.status(HS.OK).json(apps);
  }
}

export { FirebaseAppController };
