import css from '../components/ContactList.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from '../redux/contacts/operations';
import { useDispatch } from 'react-redux';

const Contacts = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    };
    
return (
<div className={css.wrapper}>
    <div className={css.content}>
    <p className={css.text}><FaUser className={css.icon} />{contact.name}</p>
    <p className={css.text}><FaPhoneAlt className={css.icon}  />{contact.phone}</p>
    </div>
    <button type='button'className={css.button} onClick={handleDelete}>Delete</button>
    </div>
)
}

// {()=>handleDelete(contact.id)}

export default Contacts