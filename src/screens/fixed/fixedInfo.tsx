import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { dimension } from '../../application/contants'
import { deleteById, put } from '../../application/request'
import { FixedReleases, RootStackScreenProps } from '../../application/types'
import {
  handleMoneyInput,
  handleMoneyInputValue,
  moneyMask,
} from '../../application/utils'
import useInOrOut from '../../hooks/useInOrOut'
import {
  ChangeIcon,
  Button,
  Text,
  InOrOut,
  Monetary,
  TextInput,
} from '../../components'

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
        <Text style={styles.infoData}>{release.title}</Text>
        <TouchableOpacity onPress={() => isEditingTitle(true)}>
          <ChangeIcon />
        </TouchableOpacity>
      </View>
    )
  }

  function onChangeValueInput(value: string) {
    setValueInput(moneyMask(value))
  }

  function renderTextInputValue() {
    return (
      <TextInput
        value={valueInput}
        onChangeText={onChangeValueInput}
        style={styles.input}
        keyboardType='numeric'
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
          <Text type='medium' style={styles.infoLabel}>
            Título
          </Text>
          {editingTitle ? renderTextInputTitle() : renderTitleData()}
        </View>
        <View style={styles.infoContainer}>
          <Text type='medium' style={styles.infoLabel}>
            Valor
          </Text>
          {editingValue ? renderTextInputValue() : renderValueData()}
        </View>
        <View style={styles.buttons}>
          <Button small onPress={onSave}>
            Salvar
          </Button>
          <Button small red onPress={onDelete}>
            Excluir
          </Button>
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
    marginTop: 2,
  },
})
