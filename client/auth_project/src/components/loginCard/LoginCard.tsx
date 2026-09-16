import { useState } from "react"
import { useLoginStore } from "../../storage/userLoginStore.ts"
import Spinner from "../spinner/Spinner.tsx"
import { loginApi } from "../../api/api.ts"
import { Link, useNavigate } from "react-router"





export default function LoginCard() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const setUserLogin = useLoginStore(s => s.setUserToken)

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setError(null)
        setLoading(true)

        try {

            const data = await loginApi({ email, password })

            setUserLogin(data.token, data.email)

            navigate('/users')


        } catch (error: any) {

            setError(error.response?.data || `error please check your email or password: ${error}`)

        } finally {
            setLoading(false)
        }

    }


    return (

        
        <div className="form-card">
    { loading && (
        <div >
            <Spinner />
        </div>
    )}
    <h1>log in</h1>
    <form onSubmit={handleSubmit} >

        <div>
            <label htmlFor="email">email</label>
            <input id="email" type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test@gmail.com" />
        </div>

        <div>
            <label htmlFor="password">password</label>
            <input id="password" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" />
        </div>

        {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}

        <button type="submit">{loading ? "loading..." : "submit"}</button>

    </form>
    <p >
        Don't have an account? <Link to="/register">Register</Link>
    </p>
</div>
    )

}
