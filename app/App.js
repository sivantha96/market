import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { AppNavigator, AuthNavigator } from './navigation/index';
import PropTypes from 'prop-types';

const App = ({ userLoggedIn }) => {
  return (
    <NavigationContainer>
      {userLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

App.propTypes = {
  userLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return { userLoggedIn: state.loginReducer.userLoggedIn };
};

export default connect(mapStateToProps)(App);
