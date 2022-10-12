import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { HomeScreenNavigationProp } from '../screens/HomeScreen';
import { Card, Image } from '@rneui/themed';
import { Screens } from '../constants';

const AlbumCard = ({ name, listened, liked, rating }: Album) => {
  const tw = useTailwind();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() =>
      navigation.navigate(Screens.AlbumModal, {
        name,
        listened,
        liked,
        rating,
      })
    }>
      <Card containerStyle={tw('p-5 rounded-lg')}>
        <View>
          <View style={tw('flex-row justify-between')}>
            <View>
              <Text style={tw('text-2xl font-bold')}>{name}</Text>
              <Text style={[tw('text-sm'), { color: "#59C1CC" }]}>
                name: {name}
              </Text>
            </View>

            <Image
              source={{ uri: 'https://links.papareact.com/3jc' }}
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

