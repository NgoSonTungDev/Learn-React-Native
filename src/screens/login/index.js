import axios from 'axios';
import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

const image = {
  uri: 'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=600',
};
const LoginScreen = ({navigation}) => {
  const [user, onchangeUser] = React.useState('');
  const [password, onchangePassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    1;
    if (user === '' || password === '') {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Nhập username va password không được bỏ trống',
        text2: 'Nhập username và password',
        visibilityTime: 4000,
        autoHide: true,
      });
    } else {
      axios
        .post('https://mafline-api.onrender.com/api/auth/login', {
          username: user,
          password: password,
        })
        .then(async function (response) {
          setIsLoading(false);
          setTimeout(() => {
            navigation.navigate('Home');
          }, 1000);
          Toast.show({
            type: 'success',
            text1: 'Đăng nhập thành công !!!',
            visibilityTime: 4000,
            autoHide: true,
          });
        })
        .catch(function (error) {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Sai user or password',
            text2: 'vui lòng nhập lại !',
            visibilityTime: 4000,
            autoHide: true,
          });
          onchangePassword('');
          onchangeUser('');
        });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.container}>
          <View style={styles.boxLogin}>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: 15,
                fontSize: 20,
                color: '#000',
                fontWeight: '600',
              }}>
              ĐĂNG NHẬP
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Ten dang nhap"
              onChangeText={onchangeUser}
              value={user}
            />
            <TextInput
              style={styles.input}
              placeholder="mat khau"
              onChangeText={onchangePassword}
              value={password}
            />

            <Pressable
              onPress={handleLogin}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: '#0984e3',
                  width: 100,
                  textAlign: 'center',
                  color: '#fff',
                  marginHorizontal: 'auto',
                  borderRadius: 5,
                }}>
                {isLoading ? <ActivityIndicator color={'#fff'} /> : 'submit'}
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <Toast position="top" bottomOffset={200} animating={false} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  boxLogin: {
    marginHorizontal: 15,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
  },
});

export default LoginScreen;
