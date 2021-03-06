/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { Module } from 'nest.js';
import { Config } from './config';

@Module({
  components: [Config],
  exports: [Config],
})
class ConfigModule { }

export { ConfigModule };
export { Config, IDataConfig } from './config';
