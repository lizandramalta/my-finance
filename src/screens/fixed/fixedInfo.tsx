import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, dimension } from '../../application/contants'
import { deleteById, put } from '../../application/request'
import { FixedReleases, RootStackScreenProps } from '../../application/types'
import {
  handleMoneyInput,
  handleMoneyInputValue,
} from '../../application/utils'
import ChangeIcon from '../../components/changeIcon'
import CustomizeButton from '../../components/customizeButton'
import CustomizeText from '../../components/customizeText'
import InOrOut from '../../components/inOrOut'
import Monetary from '../../components/monetary'
import useInOrOut from '../../hooks/useInOrOut'

export default function FixedInfo({
  route,
  navigation,
}: RootStackScreenProps<'FixedInfo'>) {
  const { release } = route.params
  const { inOrOutState, handleInOrOut } = useInOrOut(release.inOrOut)
  const [titleInput, setTitleInput] = useState<string>(release.title)
  const [valueInput, setValueInput] = useState<string>(
    handleMoneyInputValue(release.value)
  )
  const [editingTitle, isEditingTitle] = useState(false)
  const [editingValue, isEditingValue] = useState(false)

  function renderTextInputTitle() {
    return (
      <TextInput
        value={titleInput}
        onChangeText={setTitleInput}
        style={styles.input}
      />
    )
  }

  function renderTitleData() {
    return (
      <View style={styles.infoDataContainer}>
        <CustomizeText style={styles.infoData}>{release.title}</CustomizeText>
        <TouchableOpacity onPress={() => isEditingTitle(true)}>
          <ChangeIcon />
        </TouchableOpacity>
      </View>
    )
  }

  function renderTextInputValue() {
    return (
      <TextInput
        value={valueInput}
        onChangeText={setValueInput}
        style={styles.input}
        keyboardType="numeric"
      />
    )
  }

  function renderValueData() {
    return (
      <View style={styles.infoDataContainer}>
        <Monetary style={styles.infoData}>{release.value}</Monetary>
        <TouchableOpacity onPress={() => isEditingValue(true)}>
          <ChangeIcon />
        </TouchableOpacity>
      </View>
    )
  }

  function onDelete() {
    deleteById('fixed-releases', release.id!)
    navigation.pop()
  }

  function onSave() {
    const releaseEdited: FixedReleases = {
      title: titleInput as string,
      value: handleMoneyInput(valueInput),
      inOrOut: inOrOutState,
    }
    put('fixed-releases', JSON.stringify(releaseEdited), release.id!)
    navigation.pop()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerKeyboardView}
    >
      <SafeAreaView style={styles.container}>
        <InOrOut input={inOrOutState} onSetStateInput={handleInOrOut} />
        <View style={styles.infoContainer}>
          <CustomizeText type="medium" style={styles.infoLabel}>
            Título
          </CustomizeText>
          {editingTitle ? renderTextInputTitle() : renderTitleData()}
        </View>
        <View style={styles.infoContainer}>
          <CustomizeText type="medium" style={styles.infoLabel}>
            Valor
          </CustomizeText>
          {editingValue ? renderTextInputValue() : renderValueData()}
        </View>
        <View style={styles.buttons}>
          <CustomizeButton small onPress={() => onSave()}>
            Salvar
          </CustomizeButton>
          <CustomizeButton small red onPress={() => onDelete()}>
            Excluir
          </CustomizeButton>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  containerKeyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
  },
  buttons: {
    flexDirection: 'row',
    width: dimension.width - 16,
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 48,
  },
  infoContainer: {
    width: dimension.width - 32,
    marginTop: 24,
  },
  infoLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  infoData: {
    fontSize: 22,
    marginRight: 8,
  },
  infoDataContainer: {
    flexDirection: 'row',
  },
  input: {
    width: '100%',
    height: dimension.height * 0.04,
    backgroundColor: colors.form,
    padding: 4,
    fontSize: 14,
    fontFamily: 'QuicksandRegular',
    marginTop: 8,
  },
})
