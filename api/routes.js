import Router from "@koa/router"

export const router = new Router()
const tweets = []
router.get('/tweets', ctx => {
    const list  = ctx.query.username ? tweets.filter( tweet => tweet.username === ctx.query.username) : tweets
    ctx.body = list

})

router.post('/tweets', ctx => {
    const tweet = {
        ...ctx.request.body,
        id: tweets.length + 1
    }
    tweets.push(tweet)
    console.log({tweet})
    ctx.body = {}
})
