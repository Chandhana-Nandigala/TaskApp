import React from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

//importing styles
import {styles} from './styles/SearchBox';

//importing icons
import {Icons} from '../../../../../constants/Icons';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textBox}></TextInput>
      <TouchableOpacity
        style={styles.imgContainer}
        onPress={() => Alert.alert('hola')}>
        <Image source={Icons.search} style={styles.imgStyle} />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBox;
