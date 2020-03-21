const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'Ȩ';
});
router.get('/about', ctx => {
  ctx.body = '�Ұ�';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
