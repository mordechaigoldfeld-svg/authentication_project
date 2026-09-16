import { useEffect, useState } from "react"
import { useLoginStore } from "../../storage/userLoginStore"
import Spinner from "../spinner/Spinner"
import { getAllApi } from "../../api/api"
import { data, useNavigate } from "react-router"
import Users from "../../pages/users/Users"
import './UsersList.css'


export default function UsersList() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [users, setUsers] = useState([])

    const token = useLoginStore(s => s.userToken)
    const logout = useLoginStore(s => s.logout)
    const navigate = useNavigate()

    useEffect(() => {

        const usersFetch = async () => {

            try {

                setLoading(true)
                const data = await getAllApi(token)
                setUsers(data)

            } catch (error: any) {

                setError(error.response?.data || `error : ${error}`)

            } finally {
                setLoading(false)
            }


        }

        usersFetch()



    }, [token])

    const handleLogout = () => {

        logout()

    }



    return (
        <div className="users-grid">
            
                <div className="nav">

                    <button onClick={handleLogout}>logout</button>

                </div>
            

            <div>
                {loading && <Spinner />}
                {error && <p style={{ color: "red" }}>{error}</p>}

                <h2>Users list</h2>
                <ul>
                    {users.map((u: any) => (
                        <li className="li" key={u._id}><strong>user name:</strong> {u.username}    <strong>email: </strong>{u.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}



