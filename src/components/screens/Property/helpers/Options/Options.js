import React from 'react';
import {ScrollView, Image, TouchableOpacity} from 'react-native';

//importing data
import {options} from '../DummyData';
import {styles} from './style/Options';
const Options = () => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      {options.map(item => (
        <TouchableOpacity key={item.id} style={styles.imgContainer}>
          <Image source={item.img} style={styles.imgStyle} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default Options;
