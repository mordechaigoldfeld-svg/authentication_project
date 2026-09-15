import { findByEmail, insertUserDal } from "../DAL/users_dal.js";
import { hashPassword } from "../UTILS/generatePassword.js";
import { createError } from "../VALIDATIONS/createError.js";





export async function createUserService(email, password, name) {

    const exists = await findByEmail(email)
    if (exists) throw createError(404, 'user alredy exists')
    const hashPass = await hashPassword(password)
console.log(hashPass);

    const newUser = await insertUserDal({ email, passwordHash:hashPass, name })
    return {
        "message": "User registered successfully"
    }

}



// console.log(await createUserService('test6@gmail.com',"1234",'moty'));
