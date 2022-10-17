import { View, Button } from 'react-native'
import { RootTabScreenProps } from '../../navigation/types'

export default function Fixed({ navigation }: RootTabScreenProps<'Fixed'>) {
  return (
    <View>
      <Button
        title="Fixed Info"
        onPress={() => navigation.navigate('FixedInfo')}
      />
    </View>
  )
}
