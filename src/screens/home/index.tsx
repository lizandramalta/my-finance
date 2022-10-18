import { Button, View } from 'react-native'
import { RootTabScreenProps } from '../../types'

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View>
      <Button
        title="Add Release"
        onPress={() => navigation.navigate('AddRelease')}
      />
      <Button
        title="Next Month Simulation"
        onPress={() => navigation.navigate('NextMonthSimulation')}
      />
    </View>
  )
}
