import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {colors} from '../../../../../constants/Colors';

import {houseDetails} from '../DummyData';

const PropertyDetails = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {houseDetails.map(item => (
        <View key={item.id} style={{flexDirection: 'row', marginLeft: 10}}>
          <Text style={{fontSize: 12, fontWeight: '700', color: colors.white}}>
            {item.txt} - {}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '400', color: colors.white}}>
            {item.txt1}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default PropertyDetails;
