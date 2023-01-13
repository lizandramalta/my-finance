import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
  TextInput,
  View,
} from 'react-native'
import { get, post } from '../../application/request'
import { RootTabScreenProps, FixedReleases } from '../../application/types'
import { BottomSheet, Button, InOrOut, Text } from '../../components'
import Card from './components/card'
import { BottomSheetRef } from '../../components/bottomSheet'
import { colors, dimension } from '../../application/contants'
import { handleMoneyInput } from '../../application/utils'
import useInOrOut from '../../hooks/useInOrOut'
import useBottomSheet from '../../hooks/useBottomSheet'

export default function Fixed({ navigation }: RootTabScreenProps<'Fixed'>) {
  const [fixedReleases, setFixedReleases] = useState<FixedReleases[]>()
  const [refreshing, setRefreshing] = useState(false)
  const [titleInput, setTitleInput] = useState<string>()
  const [valueInput, setValueInput] = useState<string>()
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
    reset()
    hideBottomSheet()
  }

  function onConfirm() {
    const addRelease: FixedReleases = {
      title: titleInput as string,
      value: handleMoneyInput(valueInput as string),
      inOrOut: inOrOutState,
    }
    post('fixed-releases', JSON.stringify(addRelease))
    fixedReleases ? setFixedReleases([...fixedReleases, addRelease]) : null
    resetBottomSheet()
  }

  const renderBottomSheet = () => {
    return (
      <BottomSheet ref={bottomSheetRef}>
        <InOrOut input={inOrOutState} onSetStateInput={handleInOrOut} />
        <Text style={styles.label} type="medium">
          Título
        </Text>
        <TextInput
          value={titleInput}
          onChangeText={setTitleInput}
          style={styles.input}
        />
        <Text style={styles.label} type="medium">
          Valor
        </Text>
        <TextInput
          value={valueInput}
          onChangeText={setValueInput}
          style={styles.input}
          keyboardType="numeric"
        />
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
        <Button add style={styles.button} onPress={() => showBottomSheet()} />
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
    backgroundColor: colors.form,
    padding: 4,
    fontSize: 14,
    fontFamily: 'QuicksandRegular',
    marginTop: 8,
  },
  buttonModal: {
    margin: 24,
  },
})
