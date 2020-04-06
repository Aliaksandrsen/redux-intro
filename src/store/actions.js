import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index';


const changeFirstName = (newFirstName) => {
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName,
  };
};

const changeSecondName = (secondFirstName) => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: secondFirstName,
  };
};

export { changeFirstName, changeSecondName };