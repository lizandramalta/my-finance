import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import { colors } from '../application/contants'

export default function ChangeIcon() {
  return (
    <View style={styles.circle}>
      <Ionicons name="pencil-sharp" size={24} />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.form,
  },
})
