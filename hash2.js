// import bcrypt from "bcryptjs"

// async function hashPassword(userPassword) {
//     try {
//         // let userPassword = "a";
//         let hashValue = await bcrypt.hash(userPassword, 10);
//         console.log(hashValue);
//     } catch (error) {
//         console.log(error);
//     }
// }

// hashPassword("asdf234")




// dotENV vs config

// There are two packages dot-env and config which are used to store credentials such as API keys passwords tokens.
// 80% of the world uses dot-env package, 20% smart people use config package.



// dotenv package


import dotenv from "dotenv";
import express from "express";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 6000
console.log(PORT);
console.log(process.env.NAMES);
console.log(process.env.AGE);



//config

import express from "express";
import config from "config"

const app1 = express();

const PORT1 = config.get("PORT") || 6000;
console.log(PORT1);


