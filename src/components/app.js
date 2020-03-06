import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUser } from '../actions/syncAction';

class App extends Component {
  updateUser = () => {
    this.props.updateUser();
  };

  render() {
    return (
      <div>
        <h1>App component</h1>
        <button onClick={this.updateUser}>Update</button>
      </div>
    );
  }
}

App.propTypes = {
  updateUser: PropTypes.func,
};

const select = store => store;

const mapDispatchToProps = dispatch => ({
  updateUser: () => dispatch(updateUser('Kishan')),
});
export default connect(select, mapDispatchToProps)(App);
