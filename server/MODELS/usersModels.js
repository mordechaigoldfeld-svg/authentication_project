export function createUserModel({ email, passwordHash, name }) {

    return {
        email,
        passwordHash,
        name,
        createdAt: new Date().toISOString(),
    }

}


export function returnAllWithoutPass(users) {

    const newUsers = users.map((u) => {

        u = { id: u._id.toString(), username: u.name, email: u.email }
        return u
    })
    return newUsers
}

