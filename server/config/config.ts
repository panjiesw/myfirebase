/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { Component } from 'nest.js';

@Component()
class Config {
  private _config_: Map<string, any> = new Map();

  constructor() {
    this._config_.set('data', {
      dir: process.env.MFB_DATA_DIR,
    });
  }

  get data(): IDataConfig {
    return this._config_.get('data');
  }

  set data(config: IDataConfig) {
    this._config_.set('data', config);
  }
}

export { Config };

export interface IDataConfig {
  dir: string;
}
