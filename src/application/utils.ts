export function handleMoneyInput(value: string) {
  return parseFloat(value.replace('.', '-').replace(',', '.').replace('-', ''))
}

export function handleMoneyInputValue(value: number) {
  return value.toFixed(2).replace('.', ',')
}
