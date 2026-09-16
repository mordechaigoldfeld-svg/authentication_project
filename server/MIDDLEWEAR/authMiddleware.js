import { getToken } from "../SERVICE/tokenSevice.js";
import { verifyToken } from "../UTILS/generateToken.js"
import { createError } from "../VALIDATIONS/createError.js";



export async function tokenValidator(req, res, next) {

    const { authorization } = req.headers

    try {

        const token = getToken(authorization)
        const payload = verifyToken(token)
        req.user = payload
        next()

    } catch (error) {
        if (error.message) {
            res.status(error.status || 500).json(error.message)
        }
        res.status(500).json(`server error ${error}`)
    }

}