import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <View>
        <Text>tailwind</Text>
      </View>
    </TailwindProvider>
  );
}
