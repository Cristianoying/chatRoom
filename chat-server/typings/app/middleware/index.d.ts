// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/middleware/test';

declare module 'egg' {
  interface IMiddleware {
    test: typeof ExportTest;
  }
}
