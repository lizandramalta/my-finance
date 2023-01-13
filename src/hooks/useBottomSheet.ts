import { BottomSheetRef } from '../components/bottomSheet'

export default function useBottomSheet(ref: React.RefObject<BottomSheetRef>) {
  function showBottomSheet() {
    ref.current?.showBottomSheet()
  }

  function hideBottomSheet() {
    ref.current?.hideBottomSheet()
  }

  return {
    showBottomSheet,
    hideBottomSheet,
  }
}
