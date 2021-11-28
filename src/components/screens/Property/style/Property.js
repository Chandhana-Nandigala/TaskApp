import {StyleSheet} from 'react-native';

//importing colors
import {colors} from '../../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.dimblack,
    // flexGrow: 1,
  },
  imgContainer: {
    marginTop: -60,
    zIndex: -1,
    height: 400,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  likeIcon: {
    height: 20,
    width: 20,
    tintColor: 'orange',
  },
  priceLikeContainer: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 13,
    marginTop: 10,
  },
  propertyHeading: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.white,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 3,
  },
  price: {
    fontSize: 17,
    color: colors.white,
    fontWeight: '500',
  },
  reviewContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,

    height: 25,
    alignItems: 'center',
  },
  reviewText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.orange,
    marginRight: 10,
  },
  reviewIcon: {
    height: 15,
    width: 16,
    tintColor: colors.orange,
  },
  detailsHeading: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.white,
    marginLeft: 10,
    marginTop: 10,
  },
  details: {
    fontWeight: '400',
    fontSize: 15,
    marginLeft: 10,
    marginVertical: 10,
    color: colors.white,
  },
});
