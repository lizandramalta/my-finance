import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, ViewProps, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../application/contants'
import CustomizeText from './text'

interface SelectProps<T> extends ViewProps {
  options: T[]
  onChangeOption: (item: T) => void
  placeholder?: string
  width?: number | string
}

export default function Select<T>({
  options,
  onChangeOption,
  placeholder,
  width,
}: SelectProps<T>) {
  const [selectedOption, setSelectedOption] = useState<T>()
  const [showOption, setShowOption] = useState(false)

  const styles = stylesFunction(width)

  function handleSelectedOption(option: T) {
    onChangeOption(option)
    setSelectedOption(option)
    setShowOption(false)
  }

  function handleShowOptions() {
    if (showOption) setShowOption(false)
    else setShowOption(true)
  }

  function renderOptions() {
    return (
      <View style={styles.optionsView}>
        {options.map((option) => (
          <TouchableOpacity
            style={styles.optionButton}
            key={option as string}
            onPress={() => handleSelectedOption(option)}
          >
            <CustomizeText style={styles.text}>
              {option as string}
            </CustomizeText>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleShowOptions} style={styles.selectView}>
        <View style={styles.textView}>
          <CustomizeText style={styles.text} numberOfLines={1}>
            {selectedOption ? (selectedOption as string) : placeholder}
          </CustomizeText>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name='chevron-down' color={colors.black} size={20} />
        </View>
      </TouchableOpacity>
      {showOption && renderOptions()}
    </View>
  )
}

const stylesFunction = (width?: number | string) =>
  StyleSheet.create({
    container: {
      width: '90%',
    },
    selectView: {
      width: width ? width : '100%',
      flexDirection: 'row',
      height: 27,
      backgroundColor: colors.form,
    },
    textView: {
      flex: 1,
      paddingLeft: 8,
      paddingRight: 8,
      justifyContent: 'center',
    },
    text: {
      lineHeight: 26,
      fontSize: 16,
    },
    iconContainer: {
      width: 29,
      height: 26,
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionsView: {
      width: width ? width : '100%',
      borderColor: colors.form,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      elevation: 15,
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      shadowOffset: {
        height: 2,
        width: 0,
      },
    },
    optionButton: {
      width: '100%',
      paddingLeft: 8,
      borderColor: colors.form,
      borderBottomWidth: 1,
    },
  })
