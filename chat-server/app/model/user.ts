import { Application } from 'egg';
import { Document, Model } from 'mongoose';

export interface User extends Document {
  name: string;
  uid: string;
  age?: number;
  gender?: number;
  nickName: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
}
interface UserModel extends Model<User> {}

module.exports = (app: Application) => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const UserSchema = new Schema<UserModel>({
    name: { type: String, index: true, required: true },
    nickName: { type: String, index: true, required: true },
    uid: { type: String, index: true, required: true },
  });
  // const log1 = mongoose.model<User, UserModel>('User', UserSchema, 'user');
  // console.log(UserSchema, 'log1111111111111111111');
  return mongoose.model<User, UserModel>('User', UserSchema, 'user');
};
