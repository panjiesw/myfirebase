/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { Module } from 'nest.js';
import { ConfigModule } from 'server/config';
import { FirebaseAppRepository } from './firebaseApp';

@Module({
  modules: [ConfigModule],
  components: [FirebaseAppRepository],
  exports: [FirebaseAppRepository],
})
class RepositoryModule { }

export { RepositoryModule };
