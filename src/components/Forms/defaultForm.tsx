import { View, StyleSheet } from 'react-native'
import { dimension } from '../../application/contants'
import CustomizeText from '../text'
import CustomizeTextInput from '../textInput'

interface DefaultFormProps {
  titleInput: string
  descriptionInput: string
  valueInput: string
  onChangeTitleInput: (title: string) => void
  onChangeDescriptionInput: (description: string) => void
  onChangeValueInput: (value: string) => void
}

export default function DefaultForm({
  titleInput,
  descriptionInput,
  valueInput,
  onChangeTitleInput,
  onChangeDescriptionInput,
  onChangeValueInput,
}: DefaultFormProps) {
  return (
    <View style={styles.container}>
      <CustomizeText type='medium' style={styles.label}>
        Título
      </CustomizeText>
      <CustomizeTextInput
        value={titleInput}
        onChangeText={onChangeTitleInput}
        style={styles.input}
      />
      <View style={styles.descriptionLabelContainer}>
        <CustomizeText type='medium' style={styles.descriptionlabel}>
          Descrição{' '}
        </CustomizeText>
        <CustomizeText style={styles.optionalLabel}>(opicional)</CustomizeText>
      </View>
      <CustomizeTextInput
        value={descriptionInput}
        onChangeText={onChangeDescriptionInput}
        style={styles.descriptionInput}
        multiline
        textAlignVertical='top'
      />
      <CustomizeText type='medium' style={styles.label}>
        Valor
      </CustomizeText>
      <CustomizeTextInput
        value={valueInput}
        onChangeText={onChangeValueInput}
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
  label: {
    marginTop: 16,
    fontSize: 16,
    width: '100%',
  },
  descriptionInput: {
    width: '100%',
    height: dimension.height * 0.1,
    marginTop: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  descriptionLabelContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 16,
    alignItems: 'center',
  },
  descriptionlabel: {
    fontSize: 16,
  },
  optionalLabel: {
    fontSize: 12,
  },
  input: {
    width: '100%',
    height: dimension.height * 0.04,
    marginTop: 4,
  },
})
