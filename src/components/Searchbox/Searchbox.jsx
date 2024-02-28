import { useDispatch } from 'react-redux';
import css from './Searchbox.module.css';
import { writefilter } from '../../redux/filtersSlice';
export const Searchbox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className={css.serchbox}>SearchBar</p>
      <input
        type="text"
        className={css.searchbar}
        onChange={evt => {
          dispatch(writefilter(evt.target.value));
        }}
      />
    </div>
  );
};
