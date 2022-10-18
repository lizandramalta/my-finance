import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand'
import Navigation from './src/navigation'
import { View } from 'react-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    QuicksandRegular: Quicksand_400Regular,
    QuicksandMedium: Quicksand_500Medium,
    QuicksandBold: Quicksand_700Bold,
  })

  if (!fontsLoaded) return <View></View>
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}
