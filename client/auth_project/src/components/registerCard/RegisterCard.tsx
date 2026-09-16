import { useState } from "react"
import { useLoginStore } from "../../storage/userLoginStore.ts"
import Spinner from "../spinner/Spinner.tsx"
import { loginApi, registerApi } from "../../api/api.ts"
import { Link, useNavigate } from "react-router"





export default function RegisterCard() {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setname] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [data, setData] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setError(null)
        setLoading(true)

        try {

            const data: any = await registerApi({ email, password, name })
            console.log(data);
            
            setData(data.message)
            setTimeout(() => {
                navigate('/login')
            }, 2000)
            // navigate('/login')


        } catch (error: any) {

            setError(error.response?.data || `error please check your email or password: ${error}`)

        } finally {
            setLoading(false)
        }

    }


    return (


        <div className="form-card">
            {loading && (
                <div >
                    <Spinner />
                </div>
            )}
            {data && (
                <h2>{data}</h2>
            )}

            <h1>register in</h1>
            <form onSubmit={handleSubmit} >

                <div>
                    <label htmlFor="email">email</label>
                    <input id="email" type="text" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test@gmail.com" />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input id="password" type="password" value={password} required onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" />
                </div>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} required onChange={(e) => setname(e.target.value)} placeholder="enter your name" />
                </div>

                {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}

                <button type="submit">{loading ? "loading..." : "submit"}</button>

            </form>
            <p >
                You have an account? <Link to="/login">login</Link>
            </p>
        </div>
    )

}



