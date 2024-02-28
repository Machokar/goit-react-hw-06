import { deletbutton, getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filtersSlice';
import { Contact } from '../Contact/Contact';
import css from './Contactlist.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contact} key={id}>
          <Contact id={id} name={name} number={number} onDelete={() => dispatch(deletbutton(id))} />
        </li>
      ))}
    </ul>
  );
};
