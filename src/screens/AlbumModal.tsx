import React from 'react';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { Icon } from '@rneui/themed';
import { Screens } from '../constants'
import { RootStackParamList } from '../navigator/RootNavigator';
import { TabStackParamList } from '../navigator/TabNavigator';

// Define navigation prop for dismissal
type AlbumModalNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, Screens.AlbumModal>
>;

// Define the route props to extrack props
type AlbumModalRouteProp = RouteProp<RootStackParamList, Screens.AlbumModal>

const AlbumModal = () => {
  // const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<AlbumModalNavigationProp>();
  // Get the passed props from navigation
  const { params: { name, listened, liked, rating } } = useRoute<AlbumModalRouteProp>();

  return (
    <View>
      {/*X button*/}
      <TouchableOpacity
        // Dismiss the modal
        onPress={navigation.goBack}
        style={tw("absolute right-5 top-5 z-10")}>
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>

      {/*Name header*/}
      <View style={{ marginTop: 10 }}>
        <View style={[tw("py-5 border-b"), { borderColor: "#59C1CC" }]}>
          <Text style={[tw("text-center text-xl font-bold"), { color: "#59C1CC" }]}>{name}</Text>
          <Text style={[tw("text-center italic text-sm")]}>Deliveries</Text>
        </View>
      </View>
    </View>
  );
};

export default AlbumModal;
