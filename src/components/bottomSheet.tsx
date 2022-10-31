import { Ionicons } from '@expo/vector-icons'
import {
  ModalProps,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { colors } from '../application/contants'

interface BottomSheetProps extends ModalProps {
  bottomSheetVisible: boolean
  setBottomSheetVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BottomSheet({
  children,
  bottomSheetVisible,
  setBottomSheetVisible,
}: BottomSheetProps) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={bottomSheetVisible}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.centeredView}
        >
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                width: '100%',
                alignItems: 'flex-end',
                marginBottom: 16,
              }}
              onPress={() => setBottomSheetVisible(false)}
            >
              <Ionicons name="close-circle" size={24} color={colors.blue} />
            </TouchableOpacity>
            {children}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})
