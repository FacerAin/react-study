import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.checkObjctId, postsCtrl.read);
posts.delete('/:id', postsCtrl.checkObjctId, postsCtrl.remove);
posts.patch('/:id', postsCtrl.checkObjctId, postsCtrl.update);

export default posts;
