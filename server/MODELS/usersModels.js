export function createUserModel({email,passwordHash,name}){

    return{
        email,
        passwordHash,
        name,
        createdAt: new Date().toISOString(),
    }

}