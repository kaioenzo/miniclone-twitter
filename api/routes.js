import Router from "@koa/router"
import {
    PrismaClient
} from "@prisma/client"
import bcrypt from 'bcrypt'
export const router = new Router()
const prisma = new PrismaClient()

const tweets = []
router.get('/tweets', async ctx => {
    const tweets = await prisma.tweet.findMany()
    ctx.body = tweets
})

router.post('/tweets', async ctx => {
    const tweet = await prisma.tweet.create({
        data: {
            userId: 'cl4760wr60009lcv4kgqylao6',
            text: ctx.request.body.text
        }
    })

    ctx.body = tweet
})


router.post('/signup', async ctx => {
    const saltRounds = 10
    const passwordHash = bcrypt.hashSync(ctx.request.body.password, saltRounds);
    try {
        const user = await prisma.user.create({
            data: {
                name: ctx.request.body.name,
                username: ctx.request.body.username,
                email: ctx.request.body.email,
                password: passwordHash,

            }
        })

        ctx.body = {
            id: user.id,
            name: user.name,
            email: user.email


        }
    } catch (error) {
        if(error.meta && !error.meta.target){
            ctx.status = 422
            ctx.body = "Email ou nome de usuário já existe!"
            return
        }
        ctx.status = 500
        ctx.body = 'Internal error'
    }
})
