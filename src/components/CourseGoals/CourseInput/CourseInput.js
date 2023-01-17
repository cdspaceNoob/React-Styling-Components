import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : 'black')}
// }
// & input{
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus{
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// /* form-control이 invalid 클래스에 접근할 수 있음을 선언 */
// // &.invalid input{
// //   border-color: red;
// //   background: #ffd7d7;
// // }

// // &.invalid label{
// //   color: red;
// // }
// `;

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
      {/* <FormControl className={!isValid && 'invalid'}> */}
      {/* 위와 다른 방법을 사용할 수도 있다. */}
      {/* <FormControl invalid={!isValid}> */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        {/* {}를 사용하여 동적으로 스타일을 적용할 수 있다. */}
        <label>Course Goal
        </label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form >
  );
};

export default CourseInput;
