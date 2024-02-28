import css from './Contactlist.module.css';
import { Contact } from '../Contact/Contact';

export const Contactlist = ({ avalibleusers, deletbut }) => {
  return (
    <ul className={css.list}>
      {avalibleusers.map(user => (
        <li key={user.id} className={css.model}>
          <Contact users={user} deletbut={deletbut} />
        </li>
      ))}
    </ul>
  );
};
