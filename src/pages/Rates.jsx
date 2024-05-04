import { Wave } from 'react-animated-text';

import {
  Container,
  Filter,
  Heading,
  Loader,
  RatesList,
  Section,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLastSumbols } from 'reduxState/operations';
import {
  selectCurrency,
  selectError,
  selectFilterRates,
  selectLoading,
} from 'reduxState/selectors';

const Rates = () => {
  const baseCurrency = useSelector(selectCurrency);
  const rates = useSelector(selectFilterRates);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);

  const dicpatch = useDispatch();

  useEffect(() => {
    dicpatch(fetchLastSumbols(baseCurrency));
  }, [dicpatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {isLoading && <Loader />}
        {rates.length > 0 && (
          <>
            <Filter />
            <RatesList rates={rates} />
          </>
        )}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
