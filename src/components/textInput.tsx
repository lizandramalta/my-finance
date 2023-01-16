import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import { colors } from '../application/contants'

export default function CustomizeTextInput({
  style,
  value,
  keyboardType,
  onChangeText,
  placeholder,
  multiline,
}: TextInputProps) {
  return (
    <TextInput
      style={[style, styles.default]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
      multiline={multiline}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    borderWidth: 2,
    borderColor: colors.form,
    padding: 4,
    fontSize: 14,
    fontFamily: 'QuicksandRegular',
  },
})
