import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const CardHome = ({dataCard, navigation}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Product', {id: `${dataCard._id}`});
      }}
      style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
          source={{
            uri: `https:${dataCard.image?.shift()}`,
          }}
        />
      </View>
      <View style={styles.boxContent}>
        <Text style={{textAlign: 'center', fontSize: 17, color: '#000'}}>
          {dataCard.nameProduct}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 13}}>
          {new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
          }).format(dataCard.price)}{' '}
          VND
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 300,
    margin: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dddddd',

    // overflow: 'hidden',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,

    // elevation: 1,
  },
  boxImage: {
    width: '100%',
    height: 250,
    alignItems: 'center',
  },
  boxContent: {
    width: '100%',
    height: 50,
  },
});

export default CardHome;
