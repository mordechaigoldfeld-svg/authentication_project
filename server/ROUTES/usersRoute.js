import { Router } from "express";
import { createUserControler } from "../CONTROLER/usersCntrl.js";
import { bodyExists, validcreateFields } from "../MIDDLEWEAR/bodyValidator.js";

const router = Router()


export default router


router.post('/register',bodyExists,validcreateFields,createUserControler)