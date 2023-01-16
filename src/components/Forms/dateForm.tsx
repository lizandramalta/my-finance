import { View, StyleSheet } from 'react-native'
import { dimension, placeholder } from '../../application/contants'
import CustomizeText from '../text'
import CustomizeTextInput from '../textInput'

interface DateFormProps {
  dateInput: string
  onChangeDateInput: (date: string) => void
}

export default function DateForm({
  dateInput,
  onChangeDateInput,
}: DateFormProps) {
  return (
    <View style={styles.container}>
      <View style={styles.dateLabelContainer}>
        <CustomizeText type='medium' style={styles.datelabel}>
          Data{' '}
        </CustomizeText>
        <CustomizeText style={styles.dateExample}>(dd/mm/aaaa)</CustomizeText>
      </View>
      <CustomizeTextInput
        value={dateInput}
        onChangeText={onChangeDateInput}
        style={styles.input}
        keyboardType='numeric'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: dimension.width - 32,
  },
  dateLabelContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 16,
    alignItems: 'center',
  },
  datelabel: {
    fontSize: 16,
  },
  dateExample: {
    fontSize: 12,
  },
  input: {
    width: '100%',
    height: dimension.height * 0.04,
    marginTop: 4,
  },
})
