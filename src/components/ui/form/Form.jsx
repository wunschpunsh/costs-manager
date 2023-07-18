import {
  StyledForm,
  StyledFormWrapper,
  StyledSubmitBtn,
  StyledResetBtn,
  StyledActionsWrapper,
} from './style';
import {Input} from '../input/Input';
import {useState} from 'react';

export function Form({onSaveNewCostData, setShowNewCost}) {
  const [inputName, setinputName] = useState('');
  const [inputSumm, setinputSumm] = useState('');
  const [inputDate, setinputDate] = useState('');

  const changeNameHandler = (value) => {
    setinputName(value);
  };

  const changeSummHandler = (value) => {
    setinputSumm(value);
  };

  const changeDateHandler = (value) => {
    setinputDate(value);
  };

  const setShowNewCostHandler = () => {
    setShowNewCost(false);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const userInputData = {
      title: inputName,
      price: inputSumm,
      date: new Date(inputDate),
    };
    onSaveNewCostData(userInputData);

    setinputName('');
    setinputSumm('');
    setinputDate('');

    setShowNewCost(false);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledFormWrapper>
        <StyledActionsWrapper>
          <Input
            title={'Название'}
            name={'name'}
            type={'text'}
            onChange={changeNameHandler}
            inputValue={inputName}
          ></Input>
          <Input
            title={'Сумма'}
            name={'summ'}
            type={'number'}
            inputValue={inputSumm}
            onChange={changeSummHandler}
          ></Input>
          <Input
            title={'Дата'}
            name={'date'}
            type={'date'}
            inputValue={inputDate}
            onChange={changeDateHandler}
          ></Input>
          <StyledSubmitBtn type='submit'>Добавить расход</StyledSubmitBtn>
          <StyledResetBtn type='reset' onClick={setShowNewCostHandler}>
            Отмена
          </StyledResetBtn>
        </StyledActionsWrapper>
      </StyledFormWrapper>
    </StyledForm>
  );
}
