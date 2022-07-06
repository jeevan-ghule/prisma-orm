const router = require("express").Router();
const { PrismaClient } = require("@prisma/client")

const { user, post } = new PrismaClient()
router.get("/", async (req, res) => {
    let posts = await post.findMany();
    res.json(posts)
})

router.get("/:userId", async (req, res) => {
    let { userId } = req.params
    let posts = await post.findMany({
        where: {
            authorId: parseInt(userId)
        }
    });
    res.json(posts)
})

router.post("/", async (req, res) => {

    const { title, content, authorId } = req.body
    let existUser = await user.findUnique({
        where: {
            id: authorId
        }
    });

    if (!existUser) {
        return res.status(400).json({ message: "user not exist" })
    }
    let newPost = await post.create({
        data: {
            title,
            content,
            authorId
        }
    })
    res.json(newPost)
})

module.exports = router     