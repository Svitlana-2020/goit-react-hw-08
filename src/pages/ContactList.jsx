import css from "../components/ContactList.module.css";
// import { selectContacts, selectFilter } from "../redux/selectors";
import Contacts from "../components/Contacts";
import { useSelector } from 'react-redux';
import {selectFilteredContacts } from '../redux/contacts/slice'

const ContactList = () => {
    const filteredContact = useSelector(selectFilteredContacts);
    

// const filteredContact = listContacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <ul className={css.list}>
        {filteredContact.map((contact) => (
          <li key={contact.id} className={css.listItem}>
            <Contacts contact={contact}  />
          </li>
        ))}
      </ul>
    );
  };

  export default ContactList;