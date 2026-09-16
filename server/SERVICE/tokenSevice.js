import { createError } from "../VALIDATIONS/createError.js";



export function getToken(authorization) {

    if (!authorization) throw createError(401, 'miss required headers');
    const token = authorization.split("Bearer")[1]
    if (!token) throw createError(401, 'token error');
    return token
}