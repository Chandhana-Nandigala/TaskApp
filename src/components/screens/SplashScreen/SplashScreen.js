import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import {Icons} from '../../../constants/Icons';

import {styles} from './style/SplashScreen';
const SplashScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={Icons.house}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          props.setTimeOut(false);
        }}
      />
    </SafeAreaView>
  );
};
export default SplashScreen;
