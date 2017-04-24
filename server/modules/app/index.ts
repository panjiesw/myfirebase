/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { Module } from 'nest.js';
import { RepositoryModule } from 'server/repositories';
import { FirebaseAppService } from './service';
import { FirebaseAppController } from './controller';

@Module({
  controllers: [FirebaseAppController],
  components: [FirebaseAppService],
  modules: [RepositoryModule],
})
class FirebaseAppModule { }

export { FirebaseAppModule };
