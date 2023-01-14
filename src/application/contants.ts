import { Dimensions } from 'react-native'

export const dimension = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export const colors = {
  white: '#FFF',
  black: '#000',
  red: '#F34976',
  softRed: '#F39EB5',
  blue: '#2955D8',
  softBlue: '#9AAFF2',
  green: '#5ABF73',
  softGreen: '#E0F2E4',
  form: '#C9D3F4',
}

export const icons = {
  Home: 'home',
  Cards: 'wallet',
  Fixed: 'logo-usd',
  Extract: 'receipt',
  Profile: 'person',
}
