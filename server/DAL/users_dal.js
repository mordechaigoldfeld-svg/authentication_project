import { fi } from "zod/v4/locales";
import { db } from "../DB/db_config.js";
import { createUserModel } from "../MODELS/usersModels.js";



const users = db.collection('users')



export async function insertUserDal({ email, name, passwordHash }) {

    const user = { ...createUserModel({ email: email.toLowerCase(), passwordHash, name }) }

    const { insertedId } = await users.insertOne(user)

    user._id = insertedId
    return user

}

// console.log(await insertUserDal({email:'no',name:'pa',passwordHash:'ui'}));


export async function findByEmail(email) {

    const lowerEmail = email.toLowerCase()

    const user = await users.findOne({email:lowerEmail})
    
    return user

}


// console.log(await findByEmail('test2@gmail.com'));
