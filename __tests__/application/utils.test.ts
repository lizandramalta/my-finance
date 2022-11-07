import {
  handleMoneyInput,
  handleMoneyInputValue,
} from '../../src/application/utils'

describe('application/utils', () => {
  describe('handleMoneyInput', () => {
    it('should return 8.59 when the value is 8,59', () => {
      const result = handleMoneyInput('8,59')
      expect(result).toBe(8.59)
    })
  })

  describe('handleMoneyInputValue', () => {
    it('should return 8,59 when the value is 8.59', () => {
      const result = handleMoneyInputValue(8.59)
      expect(result).toBe('8,59')
    })
  })
})
