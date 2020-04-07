import React from 'react';
import { connect } from 'react-redux';

import { changeFirstName, changeSecondName } from '../store/actions';

class MainComponent extends React.Component {

  render() {
    // console.log(this.props);
    const { firstName, secondName, changeFirstName, changeSecondName } = this.props;
    return (<div>
      <div>
        <input
          type='text'
          value={this.props.firstName}
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
          value={this.props.secondName}
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
