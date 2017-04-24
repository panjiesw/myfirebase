/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import * as path from 'path';
import { Component } from 'nest.js';
import * as Datastore from 'nedb-promise';
import { IFirebaseApp } from 'common/models/firebaseApp';
import { Config, IDataConfig } from 'server/config';

interface IFirebaseAppRepository {
  create(app: IFirebaseApp): Promise<IFirebaseApp>;
  findByID(_id: string): Promise<IFirebaseApp | null>;
  findAll(): Promise<IFirebaseApp[]>;
  setName(_id: string, name: string): Promise<any>;
  remove(_id: string): Promise<number>;
}

@Component()
class FirebaseAppRepository implements IFirebaseAppRepository {
  public static FILE = 'firebase.db';

  public collection: Datastore;
  private config: IDataConfig;

  constructor(config: Config) {
    this.config = config.data;
    this.collection = new Datastore({
      filename: `${this.config.dir}${path.sep}${FirebaseAppRepository.FILE}`,
      autoload: true,
    });
  }

  public create(app: IFirebaseApp): Promise<IFirebaseApp> {
    return this.collection.insert(app);
  }

  public findByID(_id: string): Promise<IFirebaseApp | null> {
    return this.collection.findOne({ _id });
  }

  public findAll(): Promise<IFirebaseApp[]> {
    return this.collection.find({});
  }

  public setName(_id: string, name: string): Promise<any> {
    return this.collection.update({ _id }, { name });
  }

  public remove(_id: string): Promise<number> {
    return this.collection.remove({ _id });
  }
}

export { IFirebaseAppRepository, FirebaseAppRepository };
