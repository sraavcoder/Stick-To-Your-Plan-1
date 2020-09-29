import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';

import Step1 from './screens/Step1';
import Step2 from './screens/Step2';
import Step3 from './screens/Step3';
import Step4 from './screens/Step4';

import Go from './screens/GoScreen';


export default function App() {
  return (
    <AppContainer />
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  HomeScreen: { screen: HomeScreen },
  Step1: { screen: Step1 },
  Step2: { screen: Step2 },
  Step3: { screen: Step3 },
  Step4: { screen: Step4 },
  Go: { screen: Go },
})

const AppContainer = createAppContainer(switchNavigator);
