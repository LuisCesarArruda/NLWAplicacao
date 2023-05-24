import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import{
  BaiJamjuree_700Bold,
}from '@expo-google-fonts/bai-jamjuree';

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold

  })

  if(!hasLoadedFonts){
    return null
  }
  return (
    <View className='bg-gray-900'>
      <Text className=' text-5xl font-bold text-gray-50 font-title'>Rocketseat</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}


