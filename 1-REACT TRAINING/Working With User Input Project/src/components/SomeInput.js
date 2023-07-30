import { useState } from 'react';

const SomeInput = () => {
  // const nameInputRef = useRef();
  const [enterName, setEnterName] = useState('');
  // valid value or not
  // const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  // touch to input
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);

  const isEnteredNameValid = enterName.trim() !== '';
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const nameInputChangeHandler = (e) => {
    setEnterName(e.target.value);

    // if (e.target.value.trim() !== '') {
    //   setIsEnteredNameValid(true);
    // }
  };

  //lost focus
  const nameInputLostFocusHandler = (e) => {
    setWasNameInputTouched(true);

    // if (enterName.trim() === '') {
    //   setIsEnteredNameValid(false);
    // }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setWasNameInputTouched(true);

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

    setEnterName(''); // update to do empty value
    // nameInputRef.current.value = ''; - not best ptactice

    setWasNameInputTouched(false);
  };

  // for add styles
  const nameInputClasses = isNameInputInvalid
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
          value={enterName}
        />
        {isNameInputInvalid && (
          <p className='error-text'>Нужно обязательно ввести имя</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
