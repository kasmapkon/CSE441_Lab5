import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper'; 
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import AddScreen from './AddScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login" 
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}
      >
        {/* Home Screen */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <IconButton
                icon="home"
                size={size}
                onPress={() => {}}
              />
            ),
          }}
        />

        {/* Login Screen */}
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <IconButton
                icon="login"
                size={size}
                onPress={() => {}}
              />
            ),
          }}
        />

        {/* Service Screen */}
        <Tab.Screen
          name="Service"
          component={AddScreen}
          options={{
            tabBarLabel: 'Service',
            tabBarIcon: ({ color, size }) => (
              <IconButton
                icon="plus"
                size={size}
                onPress={() => {}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'Service',
            tabBarIcon: ({ color, size }) => (
              <IconButton
                icon="plus"
                size={size}
                onPress={() => {}}
              />
            ),
          }}
        />
      </Tab.Navigator>
     
      
     
    </NavigationContainer>
  );
};

export default App;
