import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectname } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"
export default function UserMenu() {
    const userName = useSelector(selectname)
    const dispatch = useDispatch()
    const handleLogout = () =>
    {
       dispatch(logout())
        }
    return <div>
        <p>Hello {userName}</p>
        <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
}