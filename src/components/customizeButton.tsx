import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { colors, dimension } from '../contants'
import Text from './customizeText'

export default function CustomizeButton({
  children,
  style,
  onPress,
}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text} type="medium">
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.blue,
    width: dimension.width - 32,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 42,
    textAlign: 'center',
  },
})
