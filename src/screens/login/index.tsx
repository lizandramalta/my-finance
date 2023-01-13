import { Button } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from '../../application/types'

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate('Root')}>Entrar</Button>
    </SafeAreaView>
  )
}
