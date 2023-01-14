import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ReleaseTypes } from '../../../application/types'
import { Select, Text } from '../../../components'

export default function AddRelease() {
  const releaseOptions: ReleaseTypes[] = ['Crédito', 'Débito', 'Parcelamento']
  const [renderDebitForm, setRenderDebitForm] = useState(false)
  const [renderCreditForm, setRenderCreditForm] = useState(false)
  const [renderInstallmentForm, setRenderInstallmentForm] = useState(false)

  function renderForm(option: ReleaseTypes) {
    if (option === 'Débito') {
      setRenderDebitForm(true)
      setRenderCreditForm(false)
      setRenderInstallmentForm(false)
      return
    }
    if (option === 'Crédito') {
      setRenderDebitForm(false)
      setRenderCreditForm(true)
      setRenderInstallmentForm(false)
      return
    }
    if (option === 'Parcelamento') {
      setRenderDebitForm(false)
      setRenderCreditForm(false)
      setRenderInstallmentForm(true)
      return
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Select
        options={releaseOptions}
        onChangeOption={renderForm}
        placeholder='Selecione o tipo de lançamento'
      />
      {renderDebitForm && <Text>Débito</Text>}
      {renderCreditForm && <Text>Crédito</Text>}
      {renderInstallmentForm && <Text>Parcelamento</Text>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
  },
})
