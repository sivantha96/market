import React from 'react';
import TabNavigator from './TabNavigator';
import AuthStackNavigator from './AuthStackNavigator';

export const AppNavigator = () => {
  return <TabNavigator />;
};

export const AuthNavigator = () => {
  return <AuthStackNavigator />;
};
