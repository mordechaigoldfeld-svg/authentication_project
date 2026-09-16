import { instance, getErrorMessage } from "../utils/axios_config.ts";
import type { registerType, loginType, tokenType } from "../types/loginTypes";


// export async function registerApi(body: registerType) {

//     const register = await instance.post('/register', {
//         name: body.name,
//         password: body.password,
//         email: body.email
//     })

//     return register
// }






export async function registerApi(body: registerType) {

        const register = await instance.post('/register', {
            name: body.name,
            password: body.password,
            email: body.email
        })

        return register.data
    
}


// console.log(await registerApi({
//     email: "test390mm@gkmail.com",
//     password: "123456",
//     name: "test0"
// }));


export async function loginApi(body: loginType) {


    const loged = await instance.post('/login', {
        password: body.password,
        email: body.email
    })

    return loged.data
}

// console.log(await loginApi({
//     email: "test390@gmail.com",
//     password: "123456",

// }));


export async function getAllApi(token:string) {

    const data = await instance.get('/getAll',{
        headers:{
        authorization:`Bearer${token}`
        }
    })

    return data.data

}

// const tokenTest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWE5NTgzMGNkNDQ4Mzg0NDkxMWZjNDciLCJpYXQiOjE3ODk1NjEwMTQsImV4cCI6MTc4OTU2NDYxNH0.v8toi8i6ji5eFOqurH3mH51p1RIENF1mTkBpdi3oMIk'

// console.log(await getAllApi(tokenTest));



