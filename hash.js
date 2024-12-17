import bcrypt from "bcryptjs"

// async function hashPassword() {
//     try {
//         let userPassword = "a";
//         let hashValue = await bcrypt.hash(userPassword, 10);
//         console.log(hashValue);
//     } catch (error) {
//         console.log(error);
//     }
// }

// hashPassword()


async function verifyPassword() {
    try {
        let hashValue ="$2a$10$QLBuJsAJAhLfVDi7U5TQNONM5okBIBgSv/hVb51PsdFGDSSF/Ek0G";
        let userPassword = "a";
        let verify = await bcrypt.compare(userPassword,hashValue);
        console.log(verify);

        if(verify){
            console.log("LogIn Successfully");
        } else {
            console.log("Invalid password");
        }
        

    } catch (error) {
        console.log(error);
    }
}

verifyPassword()