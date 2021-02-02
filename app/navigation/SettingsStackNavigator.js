import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;
