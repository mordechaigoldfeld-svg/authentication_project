import { createUserService } from "../SERVICE/usersService.js";






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