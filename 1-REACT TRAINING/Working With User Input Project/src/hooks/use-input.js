import { useState } from 'react';

const useInput = (validateValueFunnc) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [wasInputTouched, setWasInputTouched] = useState(false);

  const isValueValid = validateValueFunnc(enteredValue);
  const isInputInvalid = !isValueValid && wasInputTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputLostFocusHandler = (e) => {
    setWasInputTouched(true);
  };

  const resetValues = () => {
    setEnteredValue('');
    setWasInputTouched(false);
  };

  return {
    value: enteredValue,
    hasError: isInputInvalid,
    isValid: isValueValid,
    inputChangeHandler, // inputChangeHandler: inputChangeHandler,
    inputLostFocusHandler,
    resetValues,
  };
};

export default useInput;
