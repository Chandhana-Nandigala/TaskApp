import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

//importing reusable components
import Header from '../../helpers/Header/Header';
import SearchBox from './helpers/SearchBox/SearchBox';
import Heading from './helpers/Heading/Heading';

import {styles} from './style/Home';
import {Icons} from '../../../constants/Icons';
import Tiles from './helpers/Tiles/Tiles';

const Home = () => {
  const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header left={'DemoApp'} right={Icons.more} />
        <Heading />
        <SearchBox />
        <Image
          source={Icons.garden}
          style={styles.banner}
          resizeMode="center"
        />
        <View style={styles.tilesContainer}>
          <Tiles />
          <Tiles />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
