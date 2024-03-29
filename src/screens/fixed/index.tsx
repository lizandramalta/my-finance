import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from 'react-native'
import { get, post } from '../../application/request'
import { RootTabScreenProps, FixedReleases } from '../../application/types'
import {
  BottomSheet,
  Button,
  InOrOut,
  RequiredFieldLabel,
  Text,
  TextInput,
} from '../../components'
import Card from './components/card'
import { BottomSheetRef } from '../../components/bottomSheet'
import { dimension, placeholder } from '../../application/contants'
import { handleMoneyInput, moneyMask } from '../../application/utils'
import useInOrOut from '../../hooks/useInOrOut'
import useBottomSheet from '../../hooks/useBottomSheet'

export default function Fixed({ navigation }: RootTabScreenProps<'Fixed'>) {
  const [fixedReleases, setFixedReleases] = useState<FixedReleases[]>()
  const [refreshing, setRefreshing] = useState(false)
  const [titleInput, setTitleInput] = useState<string>()
  const [valueInput, setValueInput] = useState<string>()
  const [titleEmpty, isTitleEmpty] = useState(false)
  const [valueEmpty, isValueEmpty] = useState(false)
  const { inOrOutState, handleInOrOut, reset } = useInOrOut('input')
  const bottomSheetRef = useRef<BottomSheetRef>(null)
  const { showBottomSheet, hideBottomSheet } = useBottomSheet(bottomSheetRef)

  async function getFixedReleases() {
    setFixedReleases(await get('fixed-releases'))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getFixedReleases()
    setRefreshing(false)
  }, [])

  useEffect(() => {
    const update = navigation.addListener('focus', () => {
      getFixedReleases()
    })
    return update
  }, [navigation])

  function resetBottomSheet() {
    setTitleInput('')
    setValueInput('')
    isTitleEmpty(false)
    isValueEmpty(false)
    reset()
    hideBottomSheet()
  }

  function onChangeValueInput(value: string) {
    setValueInput(moneyMask(value))
  }

  function onConfirm() {
    isTitleEmpty(!titleInput)
    isValueEmpty(!valueInput)
    if (titleInput && valueInput) {
      const addRelease: FixedReleases = {
        title: titleInput as string,
        value: handleMoneyInput(valueInput as string),
        inOrOut: inOrOutState,
      }
      post('fixed-releases', JSON.stringify(addRelease))
      fixedReleases ? setFixedReleases([...fixedReleases, addRelease]) : null
      resetBottomSheet()
    }
  }

  const renderBottomSheet = () => {
    return (
      <BottomSheet ref={bottomSheetRef} onDismiss={resetBottomSheet}>
        <InOrOut input={inOrOutState} onSetStateInput={handleInOrOut} />
        <Text style={styles.label} type='medium'>
          Título
        </Text>
        <TextInput
          value={titleInput}
          onChangeText={setTitleInput}
          style={styles.input}
        />
        {titleEmpty && <RequiredFieldLabel />}
        <Text style={styles.label} type='medium'>
          Valor
        </Text>
        <TextInput
          value={valueInput}
          onChangeText={onChangeValueInput}
          style={styles.input}
          keyboardType='numeric'
          placeholder={placeholder.money}
        />
        {valueEmpty && <RequiredFieldLabel />}
        <Button style={styles.buttonModal} onPress={onConfirm}>
          Confirmar
        </Button>
      </BottomSheet>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
      >
        {fixedReleases?.map((item) => (
          <Card
            props={item}
            key={item.id}
            onPress={() => navigation.navigate('FixedInfo', { release: item! })}
          />
        ))}
        <Button add style={styles.button} onPress={showBottomSheet} />
      </ScrollView>
      {renderBottomSheet()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
  },
  button: {
    marginVertical: 16,
  },
  label: {
    marginTop: 16,
    fontSize: 16,
    width: '100%',
  },
  input: {
    width: '100%',
    height: dimension.height * 0.04,
    marginTop: 8,
  },
  buttonModal: {
    margin: 24,
  },
})
