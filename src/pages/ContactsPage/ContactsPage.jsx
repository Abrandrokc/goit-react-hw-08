
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList.jsx"
import { selectError, selectLoading } from '../../redux/contacts/selectors';
export default function ContactsPage() {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
const isLoading= useSelector(selectLoading)
  const isError = useSelector(selectError)
  console.log(isError)
  return <div>
    <h1>Phonebook</h1>
    <ContactForm  />
    < SearchBox />
      {isLoading && <h1>Loading </h1>}
    <ContactList />
  
     {isError && <h1> Error. Try again</h1>}
  </div>
}
