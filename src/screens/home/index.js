import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import CardHome from '../../components/card';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://mafline-api.onrender.com/api/product/get-full')
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=600',
          }}
          resizeMode="cover"
          style={styles.header}>
          <Text style={{color: '#fff', fontSize: 30, textAlign: 'center'}}>
            Well come to MAFLINE
          </Text>
        </ImageBackground>

        <Text style={styles.title}>Danh sách sản Phẩm</Text>

        <View style={styles.boxCard}>
          {data.map((item, index) => (
            <CardHome dataCard={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 18,
  },
  boxCard: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default HomeScreen;
