import React, { useState, useLayoutEffect } from 'react'
import { Text, ActivityIndicator, ScrollView } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabStackParamList } from '../navigatior/TabNavigator';
import { RootStackParamList } from '../navigatior/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Image, Input } from '@rneui/themed';
import { Screens, Colors } from '../constants';
import AlbumCard from '../components/AlbumCard';

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, Screens.Home>,
  NativeStackNavigationProp<RootStackParamList>
>

type Album = {
  name: string,
}

const albums: Album[] = [
  { name: "MBDFT", },
];

const HomeScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: Colors.secondaryGreen }}>
      {albums
        .map(({ name, }) => (
          <AlbumCard key={name} name={name} />
        ))}
    </ScrollView>
  )
}

export default HomeScreen
