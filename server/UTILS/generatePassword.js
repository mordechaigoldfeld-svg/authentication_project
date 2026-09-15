import bcrypt from 'bcrypt'


export async function hashPassword(paswword) {
    return bcrypt.hash(paswword,10)
}


export async function comparePassword(paswword,hashPassword) {

    return bcrypt.compare(paswword,hashPassword)
    
}