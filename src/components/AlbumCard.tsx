import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { HomeScreenNavigationProp } from '../screens/HomeScreen';
import { Card, Image } from '@rneui/themed';
import { Colors, Screens } from '../constants';

const AlbumCard = ({ name, artist, genre, artwork, listened, liked, rating }: Album) => {
  const tw = useTailwind();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() =>
      navigation.navigate(Screens.AlbumModal, {
        name,
        artist,
        genre,
        listened,
        liked,
        rating,
      })
    }>
      <Card containerStyle={tw('p-5 rounded-lg')}>
        <View>
          <View style={tw('justify-between')}>
            <View>
              <Text style={tw('text-2xl font-bold')}>{name}</Text>
              <Text style={[tw('text-sm'), { color: Colors.gray }]}>
                {artist}
              </Text>
              <Text style={[tw('text-sm'), { color: Colors.gray }]}>
                {genre}
              </Text>
            </View>

            <Image
              source={{ uri: artwork }}
              containerStyle={tw("w-full h-64")}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
        </View>

        <Card.Divider />
        <Text>{rating}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default AlbumCard;

