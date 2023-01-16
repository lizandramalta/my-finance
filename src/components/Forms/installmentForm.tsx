import { View, StyleSheet, ScrollView } from 'react-native'
import { dimension } from '../../application/contants'
import Select from '../select'
import CustomizeText from '../text'
import CustomizeTextInput from '../textInput'

interface InstallmentFormProps {
  installmentsNumberInput: string
  onChangeInstallmentsNumberInput: (installmentsNumber: string) => void
  onChangeInitialMonth: (month: number) => void
}

export default function InstallmentForm({
  installmentsNumberInput,
  onChangeInstallmentsNumberInput,
  onChangeInitialMonth,
}: InstallmentFormProps) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <CustomizeText type='medium' style={styles.label}>
          Parcelas
        </CustomizeText>
        <CustomizeTextInput
          value={installmentsNumberInput}
          onChangeText={onChangeInstallmentsNumberInput}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <CustomizeText type='medium' style={styles.label}>
          Mês inicial
        </CustomizeText>
        <Select
          options={options}
          onChangeOption={onChangeInitialMonth}
          width={'100%'}
          height={dimension.height * 0.04}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: dimension.width - 32,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  inputContainer: {
    width: '47%',
  },
  input: {
    width: '100%',
    height: dimension.height * 0.04,
  },
})
