module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const RoleSchema = new Schema({
    roleName: { type: String, unique: true, trim: true }, // 角色名
    resource: { type: [ mongoose.Schema.Types.ObjectId ], ref: 'role', default: [] }, // 资源集合
    operator: { type: String },
  }, {
    timestamps: true,
    autoIndex: true,
  });

  return mongoose.model('Role', RoleSchema, 'role');
};
