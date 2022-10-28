import { TextProps } from 'react-native'
import CustomizeText, { CustomizeTextProps } from './customizeText'

export default function Monetary({
  style,
  children,
  type = 'regular',
}: CustomizeTextProps & TextProps) {
  function currencyFormat(num: number) {
    const formantando =
      'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    return formantando
      .replace(',', '-')
      .replace('.', ',')
      .replace('-', '.')
      .replace('R$ .', 'R$ -')
  }

  return (
    <CustomizeText style={style} type={type}>
      {currencyFormat(Number(children))}
    </CustomizeText>
  )
}
