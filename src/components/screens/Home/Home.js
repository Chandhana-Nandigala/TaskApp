import React, {useState} from 'react';
import {View, Image, ScrollView, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//importing reusable components
import Header from '../../helpers/Header/Header';
import SearchBox from './helpers/SearchBox/SearchBox';
import Heading from './helpers/Heading/Heading';

import {styles} from './style/Home';
import {Icons} from '../../../constants/Icons';
import Tiles from './helpers/Tiles/Tiles';

const Home = () => {
  const [item, setItem] = useState([{id: 1}]);
  const renderData = () => {
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
          <Tiles />
        </ScrollView>
      </SafeAreaView>
    );
  };
  return (
    <FlatList
      data={item}
      renderItem={renderData}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default Home;
