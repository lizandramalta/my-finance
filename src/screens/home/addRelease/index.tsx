import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { dimension } from '../../../application/contants'
import { ReleaseTypes } from '../../../application/types'
import { moneyMask, maskDate } from '../../../application/utils'
import {
  Button,
  DefaultForm,
  InOrOut,
  Select,
  DateForm,
  CreditCardForm,
} from '../../../components'
import InstallmentForm from '../../../components/Forms/installmentForm'
import useInOrOut from '../../../hooks/useInOrOut'

export default function AddRelease() {
  const releaseOptions: ReleaseTypes[] = ['Crédito', 'Débito', 'Parcelamento']
  const [selectedOption, setSelectedOption] = useState<ReleaseTypes>()
  const [showDefaultForm, setShowDefaultForm] = useState(false)
  const [titleInput, setTitleInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [creditCardInput, setCreditCardInput] = useState('')
  const [installmentsNumberInput, setInstallmentsNumberInput] = useState('')
  const { inOrOutState, handleInOrOut, reset } = useInOrOut('input')

  function renderForm(option: ReleaseTypes) {
    setShowDefaultForm(true)
    setSelectedOption(option)
  }

  function onChangeValueInput(value: string) {
    setValueInput(moneyMask(value))
  }

  function onChangeDateInput(value: string) {
    setDateInput(maskDate(value))
  }

  function onChangeInitialMonth() {}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Select
          options={releaseOptions}
          onChangeOption={renderForm}
          placeholder='Selecione o tipo de lançamento'
          width={dimension.width - 32}
          height={dimension.height * 0.04}
        />
        {selectedOption === 'Débito' && (
          <InOrOut
            input={inOrOutState}
            onSetStateInput={handleInOrOut}
            style={styles.inOrOut}
          />
        )}
        {showDefaultForm && (
          <DefaultForm
            titleInput={titleInput}
            onChangeTitleInput={setTitleInput}
            descriptionInput={descriptionInput}
            onChangeDescriptionInput={setDescriptionInput}
            valueInput={valueInput}
            onChangeValueInput={onChangeValueInput}
          />
        )}
        {(selectedOption === 'Débito' || selectedOption === 'Crédito') && (
          <DateForm
            dateInput={dateInput}
            onChangeDateInput={onChangeDateInput}
          />
        )}
        {(selectedOption === 'Crédito' ||
          selectedOption === 'Parcelamento') && (
          <CreditCardForm
            creditCardInput={creditCardInput}
            onChangeCreditCardInput={setCreditCardInput}
          />
        )}
        {selectedOption === 'Parcelamento' && (
          <InstallmentForm
            installmentsNumberInput={installmentsNumberInput}
            onChangeInstallmentsNumberInput={setInstallmentsNumberInput}
            onChangeInitialMonth={onChangeInitialMonth}
          />
        )}
        {showDefaultForm && (
          <Button style={styles.button}>Adicionar lançamento</Button>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 16,
  },
  inOrOut: {
    marginTop: 24,
  },
  button: {
    marginTop: 32,
  },
})
