import React, { useLayoutEffect } from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabStackParamList } from '../navigator/TabNavigator';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Screens, Colors } from '../constants';
import AlbumCard from '../components/AlbumCard';
import useAlbums from '../hooks/useAlbums';

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, Screens.Home>,
  NativeStackNavigationProp<RootStackParamList>
>

const HomeScreen = () => {
  const navigation = useNavigation();
  const { loading, error, albums } = useAlbums();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: Colors.secondaryGreen }}>
        {albums
          .map(({ name, artist, genre, artwork }) => (
            <AlbumCard key={name} name={name} artist={artist} genre={genre} artwork={artwork} />
          ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
