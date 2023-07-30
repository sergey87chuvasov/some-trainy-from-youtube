import { useState, useRef } from 'react';

const SomeInput = (props) => {
  const nameInputRef = useRef();

  const [enterName, setEnterName] = useState('');

  // valid value or not
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);

  const nameInputChangeHandler = (e) => {
    setEnterName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enterName.trim() === '') {
      setIsEnteredNameValid(false);
      return;
    }

    // if valid
    setIsEnteredNameValid(true);

    console.log(enterName); // 1 opt
    console.log(nameInputRef.current.value); // obj.current.val - 2-opt

    setEnterName(''); // update to do empty value
    // nameInputRef.current.value = ''; - not best ptactice
  };

  // for add styles
  const nameInputClasses = isEnteredNameValid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Введите Имя</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enterName}
        />
        {!isEnteredNameValid && <p className='error-text'>Ведите имя</p>}
      </div>
      <div className='form-actions'>
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
