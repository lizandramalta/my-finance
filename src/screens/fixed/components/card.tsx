import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import CustomizeText from '../../../components/customizeText'
import Monetary from '../../../components/monetary'
import { colors, dimension } from '../../../application/contants'
import { FixedReleases } from '../../../application/types'

interface CardProps extends TouchableOpacityProps {
  props: FixedReleases
}

export default function Card({ props, onPress }: CardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, props.input ? styles.input : styles.output]}
      onPress={onPress}
    >
      <CustomizeText style={styles.font}>{props.title}</CustomizeText>
      <Monetary style={styles.font}>{props.value}</Monetary>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: dimension.width - 32,
    height: dimension.height * 0.085,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,

    elevation: 15,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  input: {
    backgroundColor: colors.softGreen,
  },
  output: {
    backgroundColor: colors.softRed,
  },
  font: {
    fontSize: 16,
  },
})
