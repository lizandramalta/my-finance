import { StyleSheet, TextProps, Text } from 'react-native'

interface MyTextProps {
  type?: 'regular' | 'medium' | 'bold'
}

export default function CustomizeText({
  children,
  style,
  type = 'regular',
}: MyTextProps & TextProps) {
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
