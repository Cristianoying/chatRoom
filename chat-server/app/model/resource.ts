module.exports = app => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const ResourceSchema = new Schema({
    parentId: { type: mongoose.Schema.Types.ObjectId, default: null }, // 资源父Id
    type: { type: String, enum: [ 'menu', 'interface', 'action' ] }, // 资源类型 menu-菜单 interface-接口 action-按钮
    name: { type: String, trim: true }, // 资源名称
    url: { type: String, trim: true }, // 资源Url
    // 菜单相关参数
    component: { type: String, default: '' },
    meta: {
      // title: { type: String }, // 菜单名，同资源名称
      icon: { type: String }, // icon
      affix: { type: Boolean }, //
    },
    alwaysShow: { type: Boolean, default: false }, // 是否作为上级菜单是否强制显示
    hidden: { type: Boolean }, // 是否在菜单中隐藏
  }, {
    autoIndex: true,
  });

  return mongoose.model('Resource', ResourceSchema, 'resource');
};
