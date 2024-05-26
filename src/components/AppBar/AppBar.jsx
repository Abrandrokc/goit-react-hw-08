import { useSelector } from "react-redux"
import Navigation from "../Navigation/Navigation"
import css from "./AppBar.module.css"
import { selectisLoggedIn } from "../../redux/auth/selectors"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"
export default function AppBar() {
    const isLogIn = useSelector(selectisLoggedIn)
    return <div className={css.div}>
        <Navigation />
        {isLogIn ? <UserMenu /> : <AuthNav />}
    </div>
}