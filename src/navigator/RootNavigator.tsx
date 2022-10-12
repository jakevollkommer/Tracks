import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import AlbumModal from '../screens/AlbumModal';
import { Screens } from '../constants'

export type RootStackParamList = {
  Main: undefined;
  AlbumModal: Album;
}

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group screenOptions={{
        presentation: "modal",
      }}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name={Screens.AlbumModal}
          component={AlbumModal}
        />
      </RootStack.Group>

    </RootStack.Navigator>
  )
}

export default RootNavigator
