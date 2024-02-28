import { deletbutton } from '../../redux/contactsSlice';
import { Contact } from '../Contact/Contact';
import css from './Contactlist.module.css';
import { useDispatch, useSelector } from 'react-redux';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(event => (
        <li className={css.contact} key={event.id}>
          <Contact
            id={event.id}
            name={event.name}
            number={event.number}
            onDelete={() => dispatch(deletbutton(event.id))}
          />
        </li>
      ))}
    </ul>
  );
};
