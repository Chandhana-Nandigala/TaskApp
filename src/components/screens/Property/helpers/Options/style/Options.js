import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  imgContainer: {
    marginHorizontal: 22,
    // flexGrow: 1,
    backgroundColor: '#212121',
    elevation: 2,
    height: 46,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  imgStyle: {
    width: 25,
    height: 25,
    tintColor: colors.orange,
  },
});
