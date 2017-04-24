#!./node_modules/.bin/ts-node --require=tsconfig-paths/register
/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import * as fs from 'fs';
import * as t from 'tap';
import { IFirebaseApp } from 'common/models/firebaseApp';
import { Config } from 'server/config';
import { FirebaseAppRepository } from 'server/repositories/firebaseApp';

const config = new Config();
config.data = { dir: `${process.cwd()}/testdata` };
const filename = `${config.data.dir}/${FirebaseAppRepository.FILE}`;

t.test('firebaseApp', async (t) => {
  await t.test('create', async (t) => {
    const repo = new FirebaseAppRepository(config);
    const result = await repo.create({ name: 'Foo', path: '/home' });
    await t.test('result', (t) => {
      t.type(result._id, 'string');
      t.end();
    });
    const created = await repo.collection.findOne<IFirebaseApp>({ _id: result._id });
    await t.test('created', (t) => {
      t.notSame(created, null);
      t.end();
    });
  });
  fs.unlinkSync(filename);
}).catch(t.threw);
