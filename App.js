import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AiOutlineHome} from 'react-icons/ai';
import Footer from './src/components/footer';
import Detail from './src/screens/detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{headerShown: false}}>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           // options={{
//           //   tabBarLabel: 'Home',
//           //   tabBarIcon: ({color}) => (
//           //     <AntDesign name="home" color={color} size={26} />
//           //   ),
//           // }}
//         />
//         <Tab.Screen
//           name="Login"
//           component={LoginScreen}
//           // options={{
//           //   tabBarLabel: 'Home',
//           //   tabBarIcon: ({color}) => (
//           //     <AntDesign name="home" color={color} size={26} />
//           //   ),
//           // }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;
