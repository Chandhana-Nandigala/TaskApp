import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//importing Screens
import Home from './components/screens/Home/Home';
import Property from './components/screens/Property/Property';

const stack = createNativeStackNavigator();
const Routes = () => {
  const {Screen, Navigator} = stack;

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Property" component={Property} />
      </Navigator>
    </NavigationContainer>
  );
};
export default Routes;
