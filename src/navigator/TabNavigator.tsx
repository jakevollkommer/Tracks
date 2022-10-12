import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator as createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { Colors } from '../constants'
import { Screens } from '../constants'

export type TabStackParamList = {
  Home: undefined;
  Profile: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const activeColor: string = Colors.mainGreen;
const inactiveColor: string = Colors.gray;

const TabNavigator = () => {
  const navigation = useNavigation();

  // Remove the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: activeColor,
      tabBarInactiveTintColor: inactiveColor,
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === Screens.Home) {
          return (
            <Icon
              name="users"
              type="entypo"
              color={focused ? activeColor : inactiveColor}
            />
          );
        } else if (route.name === Screens.Profile) {
          return (
            <Icon
              name="box"
              type="entypo"
              color={focused ? activeColor : inactiveColor}
            />
          );
        }
      }
    })}>
      <Tab.Screen name={Screens.Home} component={HomeScreen} />
      <Tab.Screen name={Screens.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
