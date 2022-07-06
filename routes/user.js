const router = require("express").Router();
const { PrismaClient } = require("@prisma/client")

const { user } = new PrismaClient()

router.get("/", async (req, res) => {
    let users = await user.findMany();
    res.json(users)
})

router.post("/", async (req, res) => {

    const { email, name } = req.body
    let existUser = await user.findUnique({
        where: {
            email: email
        }
    });

    if (existUser) {
        return res.status(400).json({ message: "email is exist" })
    }

    let newUser = await user.create({
        data: {
            email,
            name
        }
    })
    res.json(newUser)
})

module.exports = router