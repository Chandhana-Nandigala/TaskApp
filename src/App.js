import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './components/screens/SplashScreen/SplashScreen';
import Routes from './routes';

const App = () => {
  const [timeOut, setTimeOut] = useState(true);
  return (
    <SafeAreaProvider>
      {timeOut ? <SplashScreen setTimeOut={setTimeOut} /> : <Routes />}
    </SafeAreaProvider>
  );
};
export default App;
