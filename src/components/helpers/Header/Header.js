import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//importing styles
import {styles} from './style/Header';

const Header = ({left, leftIcon, right}) => {
  const navigator = useNavigation();
  const homeRoute = () => {
    navigator.navigate('Home');
  };
  return (
    <View style={styles.container}>
      {left ? (
        <Text style={{color: 'black'}}>{left}</Text>
      ) : (
        <TouchableOpacity onPress={homeRoute}>
          <Image source={leftIcon} style={styles.imgStyle} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={homeRoute}>
        <Image source={right} style={styles.imgStyle} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
