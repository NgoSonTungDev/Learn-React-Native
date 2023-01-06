import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

const Detail = ({route}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {id} = route.params;

  useEffect(() => {
    axios
      .get(`https://mafline-api.onrender.com/api/product/${id}`)
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxContent}>
        {isLoading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 20,
                fontSize: 30,
                fontWeight: '600',
              }}>
              {data.nameProduct}
            </Text>
            <Image
              style={{width: '90%', height: 250}}
              source={{
                uri: `https:${data.image?.shift()}`,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '400',
                paddingVertical: 10,
                marginTop: 20,
              }}>
              {new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY',
              }).format(data.price)}{' '}
              VND
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContent: {
    flex: 0.5,
    width: '80%',
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
});

export default Detail;
