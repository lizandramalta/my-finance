import { Ionicons } from '@expo/vector-icons'
import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react'
import { View, ViewProps, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../application/contants'
import CustomizeText from './customizeText'

interface SelectProps<T> extends ViewProps {
  options: T[]
}

export interface SelectRef<T> {
  selectedOption: T | undefined
}

function Select<T>({ options }: SelectProps<T>, ref: Ref<SelectRef<T>>) {
  const [selectedOption, setSelectedOption] = useState<T>()
  const [showOption, setShowOption] = useState(false)

  useImperativeHandle(ref, () => ({
    selectedOption,
  }))

  function handleOption(option: T) {
    setSelectedOption(option)
    setShowOption(false)
  }

  function renderOptions() {
    return (
      <View style={styles.optionsView}>
        {options.map((option) => (
          <TouchableOpacity
            style={styles.optionButton}
            key={option as string}
            onPress={() => handleOption(option)}
          >
            <CustomizeText style={styles.optionText}>
              {option as string}
            </CustomizeText>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectView}>
        <View style={styles.text}>
          <CustomizeText>{selectedOption as string}</CustomizeText>
        </View>
        <TouchableOpacity onPress={() => setShowOption(true)}>
          <View style={styles.button}>
            <Ionicons name="chevron-down" color="#fff" size={24} />
          </View>
        </TouchableOpacity>
      </View>
      {showOption && renderOptions()}
    </View>
  )
}

const MySelect = forwardRef(Select)

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  selectView: {
    width: '100%',
    flexDirection: 'row',
    height: 27,
    backgroundColor: colors.form,
    borderWidth: 1,
    borderColor: colors.black,
  },
  text: {
    flex: 1,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  button: {
    width: 29,
    height: 26,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsView: {
    width: '100%',
    backgroundColor: colors.form,
    elevation: 15,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  optionButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    lineHeight: 26,
    fontSize: 16,
  },
})

export default MySelect
