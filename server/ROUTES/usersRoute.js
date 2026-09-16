import { Router } from "express";
import { createUserControler,loginControler,getAllControler } from "../CONTROLER/usersCntrl.js";
import { bodyExists, validcreateFields,validateLoginFields} from "../MIDDLEWEAR/bodyValidator.js";
import { tokenValidator } from "../MIDDLEWEAR/authMiddleware.js";


const router = Router()


export default router


router.post('/register',bodyExists,validcreateFields,createUserControler)

router.post('/login',bodyExists,validateLoginFields,loginControler)

router.get('/getall',tokenValidator,getAllControler)