import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { D1 } from '../screens/D1/D1';
import { D1Detail } from '../screens/D1Detail/D1Detail';
import { D2Edit } from '../screens/D2Edit/D2Edit';
import { D2Add } from '../screens/D2Add/D2Add';

const Stack = createStackNavigator();

// Define the routes and navigation options in an object
const screenOptions: { [key: string]: { component: React.FC<any>; title: string } } = {
  D1: { component: D1, title: 'LIST' },
  D1Detail: { component: D1Detail, title: 'LIST DETAILS' },
  D2Edit: { component: D2Edit, title: 'Edit' },
  D2Add: { component: D2Add, title: 'Add' },
};

/**
 * AppNavigator component for setting up the app's navigation.
 *
 * @returns {JSX.Element} - Rendered component.
 */
export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.keys(screenOptions).map((name) => (
          <Stack.Screen key={name} name={name} component={screenOptions[name].component} options={{ title: screenOptions[name].title }} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
