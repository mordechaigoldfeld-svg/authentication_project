import { compare } from "bcrypt";
import { findByEmail, insertUserDal } from "../DAL/users_dal.js";
import { comparePassword, hashPassword } from "../UTILS/generatePassword.js";
import { createError } from "../VALIDATIONS/createError.js";
import { generateToken } from "../UTILS/generateToken.js";
import { ObjectId } from "mongodb";





export async function createUserService(email, password, name) {

    const exists = await findByEmail(email)
    // console.log(exists._id.toString());

    if (exists) throw createError(401, 'user alredy exists')
    const hashPass = await hashPassword(password)

    const newUser = await insertUserDal({ email, passwordHash: hashPass, name })
    return {
        "message": "User registered successfully"
    }

}



// console.log(await createUserService('test6@gmail.com',"1234",'moty'));


export async function loginService(email, password) {

    const exists = await findByEmail(email)
    if (!exists) throw createError(404, 'user not found')
    const auth = await comparePassword(password, exists.passwordHash)
    if (!auth) throw createError(401, 'invalid validation please check your password');
    const token = generateToken(exists._id.toString())
    return { email, token }


}