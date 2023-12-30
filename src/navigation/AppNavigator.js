import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen
import Splash from '../screen/Splash';
import Onboard1 from '../screen/Onboard1';
import Onboard2 from '../screen/Onboard2';
import Onboard3 from '../screen/Onboard3';
import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';

const Stack = createNativeStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="Onboard3" component={Onboard3} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
