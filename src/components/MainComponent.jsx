import React from 'react';
import { connect } from 'react-redux';

import { changeFirstName, changeSecondName } from '../store/actions';

const MainComponent = ({ firstName, secondName, changeFirstName, changeSecondName }) => {
  return (
  <div>
    <div>
      <input
        type='text'
        value={firstName}
        plaseholder="firstName"
        onChange={(event) => {
          changeFirstName(event.target.value);
        }}
      >
      </input>
    </div>
    <div>
      <input
        type='text'
        value={secondName}
        plaseholder="secondName"
        onChange={(event) => {
          changeSecondName(event.target.value);
        }}
      >
      </input>
    </div>
    <div>{firstName} {secondName}</div>
  </div>)
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFirstName: (text) => dispatch(changeFirstName(text)),
    changeSecondName: (text) => dispatch(changeSecondName(text)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
