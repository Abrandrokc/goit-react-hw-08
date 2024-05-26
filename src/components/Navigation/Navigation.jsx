import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import { useSelector } from "react-redux"
import { selectisLoggedIn } from "../../redux/auth/selectors"
export default function Navigation() {
   const islogIn = useSelector(selectisLoggedIn)
    return <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        {islogIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
}