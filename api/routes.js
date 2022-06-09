import Router from "@koa/router"
import { PrismaClient } from "@prisma/client"


export const router = new Router()
const prisma =  new PrismaClient()

const tweets = []
router.get('/tweets', async ctx => {
    const tweets = await prisma.tweet.findMany()
    ctx.body = tweets
})

router.post('/tweets', async ctx => {

    const tweet = {
        userId: 'cl4760wr60009lcv4kgqylao6',
        text: ctx.request.body.text
    }
    const doc =  await prisma.tweet.create({
        data: tweet
    })
    ctx.body = doc
})
