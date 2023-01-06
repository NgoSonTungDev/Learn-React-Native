import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={{justifyContent: 'center'}}>
        Bản quyền @2022{' '}
        <Text style={{color: 'green', fontWeight: '600'}}>MAFLINE</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
