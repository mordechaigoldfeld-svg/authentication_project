import { createUserSchema, loginSchema } from "../VALIDATIONS/usersValidation.js"

export function bodyExists(req, res, next) {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ "error": "invalid body cannot be empty" })
        }

        next()

    } catch (err) {
        console.log(err)
    }

}


export function validcreateFields(req, res, next) {

    const { email, password, name } = req.body
    const isValid = createUserSchema.safeParse({ email, password, name })
    if (isValid.success === false) {
        return res.status(400).json(isValid.error.issues[0]?.message)
    }
    next()

}


export function validateLoginFields(req, res, next) {

    const { email, password } = req.body
    const isValid = loginSchema.safeParse({ email, password })
    if (isValid.success === false) {
        return res.status(400).json(isValid.error.issues[0]?.message)
    }
    next()
}