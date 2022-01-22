import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { FormLabel } from 'app/components/FormLabel';
import { Input } from './components/Input';
import { RateItem } from './RateItem';
import { TextButton } from './components/TextButton';
import { selectBase, selectLoading, selectRates } from './slice/selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { useRatesFormSlice } from './slice';

export function Rates() {
  const { actions } = useRatesFormSlice();

  const base = useSelector(selectBase);
  const rates = useSelector(selectRates);
  const isLoading = useSelector(selectLoading);
  //const error = useSelector(selectError);

  const dispatch = useDispatch();

  const onChangeBase = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.loadRates(evt.currentTarget.value));
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.loadRates('UAH'));
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  return (
    <Wrapper>
      <FormGroup onSubmit={onSubmitForm}>
        <FormLabel>Currency</FormLabel>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Type currency"
            value={base}
            onChange={onChangeBase}
          />
          {isLoading && <LoadingIndicator small />}
        </InputWrapper>
      </FormGroup>
      {rates ? (
        <List>
          {Object.entries(rates).map(item => (
            <RateItem key={item[0]} name={item[0]} value={item[1]} />
          ))}
        </List>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${TextButton} {
    margin: 16px 0;
    font-size: 0.875rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    width: ${100 / 3}%;
    margin-right: 0.5rem;
  }
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
`;

const List = styled.div``;
