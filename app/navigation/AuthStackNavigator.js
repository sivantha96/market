import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from 'app/features/Auth/containers/LoginContainer';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginContainer} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
