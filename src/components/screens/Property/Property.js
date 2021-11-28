import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icons} from '../../../constants/Icons';

//importing components
import Header from '../../helpers/Header/Header';
import Options from './helpers/Options/Options';
import Details from './helpers/Details/Details';

import {styles} from './style/Property';
import PropertyDetails from './helpers/PropertyDetails/PropertyDetails';
const Property = ({route, navigation}) => {
  const {id, title, url} = route.params;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Header leftIcon={Icons.leftArrow} right={Icons.close} />
      <Image
        source={{uri: title}}
        style={styles.imgContainer}
        resizeMode="stretch"
      />
      <View>
        <Text style={styles.propertyHeading}>Luxury Duplex House</Text>
        <PropertyDetails />
        <View style={styles.priceLikeContainer}>
          <Text style={styles.price}>30,000</Text>
          <Image source={Icons.heart} style={styles.likeIcon} />
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewText}>Review</Text>
        <Image source={Icons.rightArrow} style={styles.reviewIcon} />
      </View>
      <Text style={styles.detailsHeading}>Details</Text>
      <Text style={styles.details}>{url}</Text>
      <View style={{marginVertical: 10}}>
        <Options />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Details />
      </ScrollView>
    </ScrollView>
  );
};
export default Property;
