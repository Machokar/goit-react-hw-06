import { useDispatch, useSelector } from 'react-redux';
import css from './Contactlist.module.css';
import { Contact } from '../Contact/Contact';
import { deletebutton } from '../../redux/contactsSlice';

export const Contactlist = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items); // Corrected
  const filter = useSelector(state => state.filters.name.toLowerCase());
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.model}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deletebutton(id))} // Corrected
          />
        </li>
      ))}
    </ul>
  );
};
