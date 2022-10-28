import { StyleSheet, TextProps, Text } from 'react-native'

export interface CustomizeTextProps {
  type?: 'regular' | 'medium' | 'bold'
}

export default function CustomizeText({
  children,
  style,
  type = 'regular',
}: CustomizeTextProps & TextProps) {
  return <Text style={[style, styles[type]]}>{children}</Text>
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'QuicksandRegular',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'QuicksandMedium',
    fontWeight: 'normal',
  },
  bold: {
    fontFamily: 'QuicksandBold',
    fontWeight: 'normal',
  },
})
