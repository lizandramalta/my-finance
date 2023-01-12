import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ReleaseTypes } from '../../../application/types'
import Select, { SelectRef } from '../../../components/select'

export default function AddRelease() {
  const releaseOptions: ReleaseTypes[] = ['Crédito', 'Débito', 'Parcelamento']

  const selectRef = useCallback((ref: SelectRef<ReleaseTypes>) => {
    console.log(ref?.selectedOption)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Select options={releaseOptions} ref={selectRef} />
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
