import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Icons} from '../../../../../constants/Icons';
import {styles} from './style/Tiles';
import {useNavigation} from '@react-navigation/native';

const Tiles = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const [img, setImg] = useState();
  const [details, setDetails] = useState();

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1')
      .then(res => res.json())
      .then(json => setItems(json))
      .catch(err => console.log(err));
  };

  const navigator = useNavigation();
  const handleNavigation = (id, title, url) => {
    setId(id);
    setDetails(title);
    setImg(url);
    navigator.navigate('Property', {id, title, url});
  };

  const renderData = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.url}} style={styles.imgContainer} />
        <Text style={styles.heading}>Luxury Duplex House</Text>
        <View style={styles.tileInnerContainer}>
          <Text style={{color: 'black'}}>{item.id}</Text>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => handleNavigation(item.id, item.url, item.title)}>
            <Image source={Icons.rightArrow} style={{height: 15, width: 15}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={items}
      showsVerticalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      renderItem={renderData}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
export default Tiles;
