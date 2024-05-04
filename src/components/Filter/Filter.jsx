import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from 'reduxState/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      onChange={handleChange}
    />
  );
};
