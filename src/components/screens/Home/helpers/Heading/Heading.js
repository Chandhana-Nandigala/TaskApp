import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './style/Heading';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingLineOne}>Find Your</Text>
      <Text style={styles.headingLineTwo}>Best Property</Text>
    </View>
  );
};
export default Heading;
