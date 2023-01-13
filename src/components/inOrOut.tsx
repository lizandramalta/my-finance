import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors, dimension } from '../application/contants'
import { InOrOut } from '../application/types'
import CustomizeText from './customizeText'

interface InOrOutProps {
  input: InOrOut
  onSetStateInput: (value: InOrOut) => void
}

export default function InOrOut({
  input = 'input',
  onSetStateInput,
}: InOrOutProps) {
  const [typeSelected, setTypeSelected] = useState<InOrOut>(input)
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

  const style = styles()
  const styleInput = styles(inputSelected)
  const styleOutput = styles(!inputSelected)

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[styleInput.button, styleInput.backgroundInput]}
        onPress={onSelect}
      >
        <CustomizeText type="medium" style={styleInput.font}>
          Entrada
        </CustomizeText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styleOutput.button, styleOutput.backgroundOutput]}
        onPress={onSelect}
      >
        <CustomizeText type="medium" style={styleOutput.font}>
          Saída
        </CustomizeText>
      </TouchableOpacity>
    </View>
  )
}

const styles = (isInput?: boolean) =>
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
