// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportControllerChat from '../../../app/io/controller/chat';
import ExportControllerIndex from '../../../app/io/controller/index';
import ExportMiddlewareAuth from '../../../app/io/middleware/auth';

declare module 'egg' {
  interface Application {
    io: IO;
  }

  interface IO {
    controller: {
      chat: ExportControllerChat;
      index: ExportControllerIndex;
    }
    middleware: {
      auth: ExportMiddlewareAuth;
    }
  }
}
