import CustomizeButton from '../../components/customizeButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootStackScreenProps } from '../../types'

export default function Login({ navigation }: RootStackScreenProps<'Login'>) {
  return (
    <SafeAreaView>
      <CustomizeButton onPress={() => navigation.navigate('Root')}>
        Entrar
      </CustomizeButton>
    </SafeAreaView>
  )
}
