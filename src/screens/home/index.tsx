import { Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootTabScreenProps } from '../../application/types'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <SafeAreaView>
      <Button
        title="Add Release"
        onPress={() => navigation.navigate('AddRelease')}
      />
      <Button
        title="Next Month Simulation"
        onPress={() => navigation.navigate('NextMonthSimulation')}
      />
    </SafeAreaView>
  )
}
