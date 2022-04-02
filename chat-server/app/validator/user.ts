

module.exports = app => {
  const msg = 'wrong format';

  app.validator.addRule('faceCode', (rule, value) => {
    const reg = /^[0-9a-z_-]{4,32}$/i;
    if (!reg.test(value)) return msg;
  });

  app.validator.addRule('imgUrl', (rule, value) => {
    const reg = /^(\/[0-9a-z_-]+)*\/[0-9a-z_-]+\.(gif|jpg|jpeg|png)$/i;
    if (!reg.test(value)) return msg;
  });

  app.validator.addRule('zipUrl', (rule, value) => {
    const reg = /^(\/[0-9a-z_-]+)*\/[0-9a-z_-]+\.zip$/i;
    if (!reg.test(value)) return msg;
  });

  app.validator.addRule('faceName', (rule, value) => {
    if (value.length < 1 || value.length > 200) return msg;
  });
};
