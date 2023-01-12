import { Ionicons } from '@expo/vector-icons'
import {
  forwardRef,
  LegacyRef,
  Ref,
  useImperativeHandle,
  useState,
} from 'react'
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

interface BottomSheetProps extends ModalProps {}
export interface BottomSheetRef {
  showBottomSheet: () => void
  hideBottomSheet: () => void
}

function BottomSheet({ children }: BottomSheetProps, ref: Ref<BottomSheetRef>) {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false)

  function showBottomSheet() {
    setBottomSheetVisible(true)
  }

  function hideBottomSheet() {
    setBottomSheetVisible(false)
  }

  useImperativeHandle(ref, () => ({
    showBottomSheet,
    hideBottomSheet,
  }))

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
              onPress={hideBottomSheet}
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

const MyBottomSheet = forwardRef(BottomSheet)

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

export default MyBottomSheet
