export function handleMoneyInput(value: string) {
  return parseFloat(value.replace('.', '-').replace(',', '.').replace('-', ''))
}
