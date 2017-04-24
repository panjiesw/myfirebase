/**
 * Copyright (c) 2017 Panjie Setiawan Wicaksono <panjie@panjiesw.com>
 *
 * This software is released under the MIT License.
 * https://panjiesw.mit-license.org
 */

import { HttpException } from 'nest.js';
import * as HS from 'http-status-codes';

export class NotFoundException extends HttpException {
  constructor(msg: string) {
    super(msg, HS.NOT_FOUND);
  }
}
