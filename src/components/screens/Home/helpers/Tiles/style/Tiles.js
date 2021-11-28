import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '90%',
    backgroundColor: 'white',
    marginVertical: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  imgContainer: {
    height: 200,
    width: '100%',
    borderRadius: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginVertical: 15,
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  tileInnerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
  },
  btnContainer: {
    height: 40,
    width: 40,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
  },
});
