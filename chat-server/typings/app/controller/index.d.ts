// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';
import ExportWechat from '../../../app/controller/wechat';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: ExportUser;
    wechat: ExportWechat;
  }
}
