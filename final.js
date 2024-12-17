import express from "express"

import userRouter from './controllers/users/index.js';
import foodRouter from './controllers/food/index.js';
import boysRouter from './controllers/boys/index.js';


const app = express();

const PORT = 5001;

app.use(express.json());

app.get("/", (req,res)=> {
    try {
        res.status(200).json({msg: "Hello World" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error})
    }
})

app.use("/api", userRouter)
app.use("/api", foodRouter)
app.use("/api", boysRouter)

app.listen(PORT, () => {
    console.log(`Server chalra bhai tension nakko lo ${PORT}`);
})