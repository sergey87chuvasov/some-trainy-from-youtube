// import { useState } from 'react';
import useInput from '../hooks/use-input';

const SomeInput = () => {
  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput((val) => val.trim() !== ''); // CUSTOME HOOK

  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput((val) => val.includes('@')); // CUSTOME HOOK

  // const nameInputRef = useRef();
  // const [enterName, setEnterName] = useState('');
  // valid value or not
  // const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  // touch to input
  // const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  // const [isFormValid, setIsFormValid] = useState(false);

  // validation name
  let isFormValid = false;
  // const isEnteredNameValid = enterName.trim() !== '';
  // const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  // fo all form
  // useEffect(() => {
  //   if (isEnteredNameValid) {
  //     setIsFormValid(true);
  //   } else {
  //     setIsFormValid(false);
  //   }
  // }, [isEnteredNameValid]);

  //for email
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);

  // const emailInputChangeHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  // };

  // const emailInputLostFocusHandler = (e) => {
  //   setWasEmailInputTouched(true);
  // };

  //valid for email
  // const isEnteredEmailValid = enteredEmail.includes('@');
  // const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched;

  // for all
  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  ///
  // const nameInputChangeHandler = (e) => {
  //   setEnterName(e.target.value);

  //   // if (e.target.value.trim() !== '') {
  //   //   setIsEnteredNameValid(true);
  //   // }
  // };

  // //lost focus
  // const nameInputLostFocusHandler = (e) => {
  //   setWasNameInputTouched(true);

  //   // if (enterName.trim() === '') {
  //   //   setIsEnteredNameValid(false);
  //   // }
  // };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    // setWasNameInputTouched(true);

    // if (enterName.trim() === '') {
    //   setIsEnteredNameValid(false);
    //   return;
    // }

    if (!isEnteredNameValid) {
      return;
    }

    // if valid
    // setIsEnteredNameValid(true);

    // console.log(enterName); // 1 opt
    // console.log(nameInputRef.current.value); // obj.current.val - 2-opt

    // setEnterName(''); // update to do empty value
    // // nameInputRef.current.value = ''; - not best ptactice

    // setWasNameInputTouched(false);

    resetNameInputValues();

    //email
    // setEnteredEmail('');
    // setWasEmailInputTouched(false);

    resetEmailInputValues();
  };

  // for add styles
  const nameInputClasses = hasNameInputError
    ? 'form-control invalid'
    : 'form-control';

  // for add styles for email
  const emailInputClasses = hasEmailInputError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Введите Имя</label>
        <input
          // ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
          value={enteredName}
        />
        {hasNameInputError && (
          <p className='error-text'>Нужно обязательно ввести имя</p>
        )}
      </div>

      {/* email */}
      <div className={emailInputClasses}>
        <label htmlFor='email'>Введите email</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
          value={enteredEmail}
        />
        {hasEmailInputError && (
          <p className='error-text'>Нужно обязательно ввести email</p>
        )}
      </div>

      <div className='form-actions'>
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
