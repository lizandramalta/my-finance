import { StyleSheet } from 'react-native'
import { colors } from '../application/contants'
import CustomizeText from './text'

export default function RequiredFieldLabel() {
  return (
    <CustomizeText type='medium' style={styles.text}>
      Campo obrigatório.
    </CustomizeText>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.red,
    width: '100%',
  },
})
