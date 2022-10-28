import { useCallback, useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from 'react-native'
import { request } from '../../application/request'
import CustomizeButton from '../../components/customizeButton'
import { RootTabScreenProps, FixedReleases } from '../../types'
import Card from './components/card'
import InOrOut from '../../components/inOrOut'

export default function Fixed({ navigation }: RootTabScreenProps<'Fixed'>) {
  const [fixedReleases, setFixedReleases] = useState<FixedReleases[]>()
  const [refreshing, setRefreshing] = useState(false)

  async function getFixedReleases() {
    try {
      const response = await request('fixed-releases')
      const json = await response.json()
      setFixedReleases(json)
    } catch (error) {}
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    getFixedReleases()
    setRefreshing(false)
  }, [])

  useEffect(() => {
    getFixedReleases()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
      >
        {fixedReleases?.map((item) => (
          <Card props={item} key={item.id} />
        ))}
        <CustomizeButton add style={styles.button} />
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
  button: {
    marginVertical: 16,
  },
})
