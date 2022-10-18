import Button from '../../components/customizeButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from '../../types'

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate('Root')}>Entrar</Button>
    </SafeAreaView>
  )
}
