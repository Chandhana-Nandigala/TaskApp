import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icons} from '../../../../../constants/Icons';
import {styles} from './style/Tiles';

const Tiles = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons.garden} style={styles.imgContainer} />
      <Text style={styles.heading}>Luxury Duplex House</Text>
      <View style={styles.tileInnerContainer}>
        <Text>30,000</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Image source={Icons.rightArrow} style={{height: 20, width: 20}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Tiles;
