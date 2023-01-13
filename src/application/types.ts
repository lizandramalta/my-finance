import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList
  }
}

export type RootStackParamList = {
  Login: undefined
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  NextMonthSimulation: undefined
  AddRelease: undefined
  FixedInfo: { release: FixedReleases }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
  Home: undefined
  Cards: undefined
  Extract: undefined
  Fixed: undefined
  Profile: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >

//Responses Api

export type FixedReleases = {
  id?: number
  title: string
  value: number
  inOrOut: InOrOutType
}

//Other types

export type InOrOutType = 'input' | 'output'
export type ReleaseTypes = 'Débito' | 'Crédito' | 'Parcelamento'
