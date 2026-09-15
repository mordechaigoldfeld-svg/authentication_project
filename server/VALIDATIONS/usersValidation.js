import {z} from 'zod'


export const createUserSchema =z.object({

   
        email:z.string().email('invalid email'),
        name:z.string().min(5,'name must to be minimum 5 characters'),
        password:z.string().min(10,'password must to be minimum 10 characters')

  

});




