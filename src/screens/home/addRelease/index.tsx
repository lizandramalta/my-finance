import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ReleaseTypes } from '../../../application/types'
import Select from '../../../components/select'

export default function AddRelease() {
  const releaseOptions: ReleaseTypes[] = ['Crédito', 'Débito', 'Parcelamento']
  return (
    <SafeAreaView style={styles.container}>
      <Select options={releaseOptions} onChangeOption={() => {}} />
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
