import css from "./Contact.module.css"
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";


export default function Contact({ contact: { name, number, id }}) {
    const dispatch = useDispatch()
    return <li className={css.li} >
        <div className={css.div}>
            <p><FaUserAlt  /> {name}</p>
        <p> <FaPhone/> {number}</p>
        </div>
        
        <button className={css.click} type="button" onClick={() => { dispatch(deleteContact(id)) }} >Delete</button>
    </li>
}