import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native'
import { colors, dimension } from '../application/contants'
import { InOrOutType } from '../application/types'
import CustomizeText from './text'

interface InOrOutProps extends ViewProps {
  input: InOrOutType
  onSetStateInput: (value: InOrOutType) => void
}

export default function InOrOut({
  input = 'input',
  onSetStateInput,
  style,
}: InOrOutProps) {
  const [typeSelected, setTypeSelected] = useState<InOrOutType>(input)
  const inputSelected = typeSelected === 'input'
  const outputSelected = typeSelected === 'output'

  function onSelect() {
    if (inputSelected) {
      setTypeSelected('output')
      onSetStateInput('output')
    }

    if (outputSelected) {
      setTypeSelected('input')
      onSetStateInput('input')
    }
  }

  const styles = stylesFunction()
  const styleInput = stylesFunction(inputSelected)
  const styleOutput = stylesFunction(!inputSelected)

  return (
    <View style={style}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styleInput.button, styleInput.backgroundInput]}
          onPress={onSelect}
        >
          <CustomizeText type='medium' style={styleInput.font}>
            Entrada
          </CustomizeText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styleOutput.button, styleOutput.backgroundOutput]}
          onPress={onSelect}
        >
          <CustomizeText type='medium' style={styleOutput.font}>
            Saída
          </CustomizeText>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const stylesFunction = (isInput?: boolean) =>
  StyleSheet.create({
    container: {
      width: dimension.width - 32,
      flexDirection: 'row',
    },
    button: {
      width: '50%',
      height: dimension.height * 0.069,
      backgroundColor: colors.form,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundInput: {
      backgroundColor: isInput ? colors.green : colors.form,
    },
    backgroundOutput: {
      backgroundColor: isInput ? colors.red : colors.form,
    },
    font: {
      fontSize: 20,
      color: isInput ? colors.white : colors.black,
    },
  })
