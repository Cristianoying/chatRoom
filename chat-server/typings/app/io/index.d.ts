// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportControllerChat from '../../../app/io/controller/chat';
import ExportMiddlewareAuth from '../../../app/io/middleware/auth';

declare module 'egg' {
  interface Application {
    io: IO;
  }

  interface IO {
    controller: {
      chat: ExportControllerChat;
    }
    middleware: {
      auth: ExportMiddlewareAuth;
    }
  }
}
