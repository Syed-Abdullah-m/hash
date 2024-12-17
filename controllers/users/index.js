import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.status(200).send("users")
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error})
    }
})

export default router;