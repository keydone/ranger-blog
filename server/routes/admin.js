const Router = require('koa-router');
const articles = require('../controllers/articles');

const router = new Router();

router
    .get('/', (ctx) => {
        ctx.render('admin/login');
    })
    .get('/post', (ctx) => {
        ctx.render('admin/post', {
            pageheader: false,
        });
    })
    .post('/post-save', async (ctx, next) => {
        const { success, msg } = await articles.save(ctx, next);

        if (success) {
            ctx.body = {
                status: 0,
                msg: 'ok',
            };
        } else {
            ctx.body = {
                status: 1,
                msg,
            };
        }
    });

module.exports = router.routes();