import { Ionicons } from '@expo/vector-icons'
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { colors, dimension } from '../application/contants'
import Text from './text'

interface CustomizeButtonProps extends TouchableOpacityProps {
  add?: boolean
  small?: boolean
  red?: boolean
}

export default function CustomizeButton({
  add = false,
  small = false,
  red = false,
  children,
  style,
  onPress,
}: CustomizeButtonProps) {
  const customizeStyles = styles(small, red)
  return (
    <TouchableOpacity style={[customizeStyles.button, style]} onPress={onPress}>
      <Text style={customizeStyles.text} type="medium">
        {add ? (
          <Ionicons name="add-circle" color={colors.white} size={32} />
        ) : (
          children
        )}
      </Text>
    </TouchableOpacity>
  )
}

const styles = (small: boolean, red: boolean) =>
  StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: red ? colors.red : colors.blue,
      width: small ? (dimension.width - 48) / 2 : dimension.width - 32,
    },
    text: {
      color: '#fff',
      fontSize: 22,
      lineHeight: 42,
      textAlign: 'center',
    },
  })
