// import { useState } from 'react';

import { useReducer } from 'react';

const initialInputState = {
  inputValue: '',
  wasTouch: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT_CHANGE') {
    return { inputValue: action.value, wasTouch: state.wasTouch };
  }
  if (action.type === 'INPUT_BLUR') {
    return { inputValue: state.inputValue, wasTouch: true };
  }
  if (action.type === 'RESET_INPUT') {
    return { inputValue: '', wasTouch: false };
  }

  return initialInputState;
};

const useInput = (validateValueFunnc) => {
  const [inputState, dispatchAction] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const [enteredValue, setEnteredValue] = useState('');
  // const [wasInputTouched, setWasInputTouched] = useState(false);

  // const isValueValid = validateValueFunnc(enteredValue);
  // const isInputInvalid = !isValueValid && wasInputTouched;

  const isValueValid = validateValueFunnc(inputState.inputValue);
  const isInputInvalid = !isValueValid && inputState.wasTouch;

  const inputChangeHandler = (e) => {
    dispatchAction({ type: 'INPUT_CHANGE', value: e.target.value });
    // setEnteredValue(e.target.value);
  };

  const inputLostFocusHandler = (e) => {
    dispatchAction({ type: 'INPUT_BLUR', value: e.target.value });
    // setWasInputTouched(true);
  };

  const resetValues = () => {
    dispatchAction({ type: 'RESET_INPUT' });
    // setEnteredValue('');
    // setWasInputTouched(false);
  };

  return {
    // value: enteredValue,
    value: inputState.inputValue,
    hasError: isInputInvalid,
    isValid: isValueValid,
    inputChangeHandler, // inputChangeHandler: inputChangeHandler,
    inputLostFocusHandler,
    resetValues,
  };
};

export default useInput;
