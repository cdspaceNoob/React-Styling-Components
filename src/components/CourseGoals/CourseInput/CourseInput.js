import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  // 입력된 값의 유효성을 체크하기 위한 state.
  // 유효하지 않을 때 flag를 false로 정하고, 유효할 때는 true로 정할 것이다. 
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log(enteredValue.length);
    // 입력받은 값을 trim하여 그 길이를 체크한다.
    if (enteredValue.length === 0) {
      // 입력된 값이 없다면 유효하지 않은 것이다. state를 false로. 
      setIsValid(false);
      // 아무 것도 입력되지 않았다면 return으로 흐름을 종료하여 공백 입력이 일어나지 않게 한다.
      // alert도 작동한다. 
      // alert("no data inserted");
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        {/* {}를 사용하여 동적으로 스타일을 적용할 수 있다. */}
        <label>Course Goal
        </label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
