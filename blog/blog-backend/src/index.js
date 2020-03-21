const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', ctx => {
  ctx.body = 'È¨';
});
router.get('/about', ctx => {
  ctx.body = '¼Ò°³';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
