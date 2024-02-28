import css from './Searchbox.module.css';
export const Searchbox = ({ values, onChanges }) => {
  return (
    <div>
      <p className={css.serchbox}>SearchBar</p>
      <input
        type="text"
        value={values}
        className={css.searchbar}
        onChange={evt => {
          onChanges(evt.target.value);
        }}
      />
    </div>
  );
};
