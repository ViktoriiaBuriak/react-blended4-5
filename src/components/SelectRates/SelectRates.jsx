import Select from 'react-select';

import symbols from './symbols.json';

import styles from './SelectRates.module.css';

import './ReactSelect.css';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from 'reduxState/currencySlice';

export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const onChange = ({ value }) => {
    dispatch(setBaseCurrency(value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        onChange={onChange}
        isSearchable
      />
    </div>
  );
};
