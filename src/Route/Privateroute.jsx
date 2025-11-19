import { use } from "react"
import { Contextapi } from "../context/Authcontext"
import { Navigate, useLocation } from "react-router"

const Privateroute = ({children}) => {
  const{user, loader}=use(Contextapi)
  const location = useLocation()
  console.log('lll',location)
  if(loader){
    return
  }
  if(user){
    return children
  }
  return (
    <Navigate state={location?.pathname} to={'/login'}></Navigate>
  )
}

export default Privateroute