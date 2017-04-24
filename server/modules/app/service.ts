/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { Component } from 'nest.js';
import { IFirebaseApp } from 'common/models/firebaseApp';
import * as ex from 'server/exceptions';
import { FirebaseAppRepository } from 'server/repositories/firebaseApp';

interface IFirebaseAppService {
  createApp(app: IFirebaseApp): Promise<IFirebaseApp>;
  findByID(_id: string): Promise<IFirebaseApp | null>;
  findAll(): Promise<IFirebaseApp[]>;
  setName(_id: string, name: string): Promise<any>;
  remove(_id: string): Promise<number>;
}

@Component()
class FirebaseAppService implements IFirebaseAppService {
  constructor(private firebaseAppRepository: FirebaseAppRepository) { }

  public async createApp(app: IFirebaseApp): Promise<IFirebaseApp> {
    if (!app.path) {
      throw new ex.BadRequestException('Service config path is required');
    }
    return this.firebaseAppRepository.create(app);
  }

  public async findByID(_id: string): Promise<IFirebaseApp> {
    const result = await this.firebaseAppRepository.findByID(_id);
    if (!result) {
      throw new ex.NotFoundException(`No firebase app found with id ${_id}`);
    }
    return result;
  }

  public async findAll(): Promise<IFirebaseApp[]> {
    return this.firebaseAppRepository.findAll();
  }

  public async setName(_id: string, name: string): Promise<any> {
    return this.firebaseAppRepository.setName(_id, name);
  }

  public remove(_id: string): Promise<number> {
    return this.firebaseAppRepository.remove(_id);
  }
}

export { IFirebaseAppService, FirebaseAppService };
