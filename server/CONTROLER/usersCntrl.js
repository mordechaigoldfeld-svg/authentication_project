import { getAll } from "../DAL/users_dal.js";
import { createUserService, loginService } from "../SERVICE/usersService.js";






export async function createUserControler(req, res) {

    const { email, password, name } = req.body

    try {

        const newUser = await createUserService(email, password, name)
        res.status(201).json(newUser)

    } catch (error) {

        if (error.message) {
            res.status(error.status).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}


export async function loginControler(req, res) {

    const { email, password } = req.body

    try {

        const loged = await loginService(email, password)
        res.status(200).json(loged)

    } catch (error) {
        if (error.message) {
            res.status(error.status).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}


export async function getAllControler(req,res) {

    try {
        const users = await getAll()
        res.status(200).json(users)

    } catch (error) {
        if (error.message) {
            res.status(error.status).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}