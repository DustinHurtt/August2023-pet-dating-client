import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth.context"

const Profile = () => {

    const { user } = useContext(AuthContext)

  return (
    <div>
        <h1>Profile</h1>

        {
            user &&
        
            <h2>Welcome {user.name}!</h2>
        }

        <Link to='/add-pet'>Add a Pet</Link>

    </div>
  )
}

export default Profile