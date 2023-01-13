import { useState } from 'react'
import { InOrOut } from '../application/types'

export default function useInOrOut(defaultInput: InOrOut) {
  const [inOrOutState, setInOrOutState] = useState(defaultInput)

  function handleInOrOut(value: InOrOut) {
    if (value === 'input') setInOrOutState('input')
    else setInOrOutState('output')
  }

  function reset() {
    setInOrOutState(defaultInput)
  }

  return { inOrOutState, handleInOrOut, reset }
}
