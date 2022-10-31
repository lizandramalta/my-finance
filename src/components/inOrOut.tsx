import { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors, dimension } from '../application/contants'
import CustomizeText from './customizeText'

interface InOrOutProps {
  input: boolean
  isInput?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function InOrOut({ input = true, isInput }: InOrOutProps) {
  const [typeSelected, setTypeSelected] = useState(input ? 0 : 1)
  const indexType = {
    input: 0,
    output: 1,
  }
  const inputSelected = typeSelected === indexType.input
  const outputSelected = typeSelected === indexType.output

  function onSelect(index: number) {
    if (inputSelected && index !== indexType.input) {
      setTypeSelected(1)
      isInput ? isInput(false) : null
    }

    if (outputSelected && index !== indexType.output) {
      setTypeSelected(0)
      isInput ? isInput(true) : null
    }
  }

  const style = styles()
  const styleInput = styles(inputSelected)
  const styleOutput = styles(!inputSelected)

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[styleInput.button, styleInput.backgroundInput]}
        onPress={() => onSelect(indexType.input)}
      >
        <CustomizeText type="medium" style={styleInput.font}>
          Entrada
        </CustomizeText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styleOutput.button, styleOutput.backgroundOutput]}
        onPress={() => onSelect(indexType.output)}
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
