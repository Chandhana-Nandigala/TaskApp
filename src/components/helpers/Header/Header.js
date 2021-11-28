import React from 'react';
import {View, Text, Image} from 'react-native';

//importing styles
import {styles} from './style/Header';

const Header = ({left, right}) => {
  return (
    <View style={styles.container}>
      <Text>{left}</Text>
      <Image source={right} style={styles.imgStyle} />
    </View>
  );
};
export default Header;
