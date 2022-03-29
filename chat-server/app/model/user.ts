import { Application } from 'egg';
import { Document, Model, Schema } from 'mongoose';

export interface User extends Document {
  name: string;
  uid: string;
  age?: number;
  gender?: number; // 性别 0 女 1 男
  nickName: string; // 昵称
  email?: string;
  userName: string; // 用户名
  password: string; // 密码
  passwordV: number; // 密码版本
  headImg?: string; // 头像
  phone?: string; // 手机号
  remark?: string; // 备注
  status: number; // 状态 状态 0:禁用 1：启用
  departmentName?: string; // 部门名称
  roleIdList: Schema.Types.ObjectId[]; // 角色列表
  socketId?: string;
  createdAt: Date;
  updatedAt: Date;
}
interface UserModel extends Model<User> {}

module.exports = (app: Application) => {
  const { mongoose } = app;

  const UserSchema = new Schema<UserModel>({
    name: { type: String, index: true, required: true },
    uid: { type: String, index: true, required: true },
    age: { type: Number, default: 18 },
    gender: { type: Number, default: 0 },
    nickName: { type: String, required: true },
    email: { type: String },
    userName: { type: String, required: true }, // 用户名
    password: { type: String, required: true }, // 密码
    passwordV: { type: Number, default: 1, required: true }, // 密码版本
    headImg: { type: String }, // 头像
    phone: { type: String }, // 手机号
    remark: { type: String }, // 备注
    status: { type: Number, default: 1 }, // 状态 状态 0:禁用 1：启用
    departmentName: { type: String }, // 部门名称
    roleIdList: { type: Array, default: [], required: true }, // 角色列表
    socketId: { type: String, index: true,},
  });

  return mongoose.model<User, UserModel>('User', UserSchema, 'user');
};
