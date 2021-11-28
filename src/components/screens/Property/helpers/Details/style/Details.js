import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../constants/Colors';

export const styles = StyleSheet.create({
  imgStyle: {
    height: 18,
    width: 18,
    tintColor: colors.white,
  },
  detailsContainer: {
    flexDirection: 'row',
    backgroundColor: '#423F3E',
    flexGrow: 1,
    width: 180,
    height: 65,
    marginHorizontal: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 8,
  },
  imgContainer: {
    height: 35,
    width: 35,
    backgroundColor: '#1B1A17',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  type: {
    fontSize: 18,
    color: colors.white,
  },
});
