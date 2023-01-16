import { View, StyleSheet } from 'react-native'
import { dimension } from '../../application/contants'
import CustomizeText from '../text'
import CustomizeTextInput from '../textInput'

interface CreditCardFormProps {
  creditCardInput: string
  onChangeCreditCardInput: (date: string) => void
}

export default function CreditCardForm({
  creditCardInput,
  onChangeCreditCardInput,
}: CreditCardFormProps) {
  return (
    <View style={styles.container}>
      <CustomizeText type='medium' style={styles.label}>
        Cartão
      </CustomizeText>
      <CustomizeTextInput
        value={creditCardInput}
        onChangeText={onChangeCreditCardInput}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: dimension.width - 32,
  },
  label: {
    marginTop: 16,
    fontSize: 16,
    width: '100%',
  },
  input: {
    width: '100%',
    height: dimension.height * 0.04,
    marginTop: 4,
  },
})
