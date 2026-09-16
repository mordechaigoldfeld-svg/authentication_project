import { Navigate, Outlet } from "react-router"
import { useLoginStore } from "../../storage/userLoginStore.ts"



export default function Protected() {

  const userToken = useLoginStore(s => s.userToken)


  if (!userToken || userToken.trim() === "") {

    return <Navigate to='/login' replace={false} />
  }

  return (
    <Outlet />
  )
}
