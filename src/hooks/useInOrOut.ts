import { useState } from 'react'
import { InOrOutType } from '../application/types'

export default function useInOrOut(defaultInput: InOrOutType) {
  const [inOrOutState, setInOrOutState] = useState(defaultInput)

  function handleInOrOut(value: InOrOutType) {
    if (value === 'input') setInOrOutState('input')
    else setInOrOutState('output')
  }

  function reset() {
    setInOrOutState(defaultInput)
  }

  return { inOrOutState, handleInOrOut, reset }
}
