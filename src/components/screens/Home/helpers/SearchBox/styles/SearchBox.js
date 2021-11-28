import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: 'white',
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textBox: {
    height: '100%',
    width: '85%',
  },
  imgStyle: {
    height: 25,
    width: 25,
    tintColor: 'green',
  },
  imgContainer: {
    backgroundColor: 'orange',
    height: '85%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
