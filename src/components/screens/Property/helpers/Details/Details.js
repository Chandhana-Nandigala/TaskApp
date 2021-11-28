import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

import {details} from '../DummyData';
import {styles} from './style/Details';

const Details = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {details.map(item => (
        <View key={item.id} style={styles.detailsContainer}>
          <View style={styles.imgContainer}>
            <Image source={item.img} style={styles.imgStyle} />
          </View>
          <Text style={styles.type}>{item.txt}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default Details;
