import css from './Contact.module.css';
export const Contact = ({ users: { name, number, id }, deletbut }) => {
  return (
    <>
      <div className={css.namenumber}>
        <p className={css.name}>{name}</p>
        <p className={css.number}>{number}</p>
      </div>
      <div>
        <button onClick={() => deletbut(id)} className={css.button}>
          Delete
        </button>
      </div>
    </>
  );
};
