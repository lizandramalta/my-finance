export function handleMoneyInput(value: string) {
  return parseFloat(value.replace('.', '-').replace(',', '.').replace('-', ''))
}

export function handleMoneyInputValue(value: number) {
  return value.toFixed(2).replace('.', ',')
}

//Masks

export function moneyMask(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1,2})$/, ',$1')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export function moneyCPF(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export function maskPhone(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})(\d)/, '$1-$2')
}

export function maskCEP(value: string) {
  return value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
}

export function maskDate(value: string) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1')
}

export function maskOnlyLetters(value: string) {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '')
}
export function maskOnlyNumbers(value: string) {
  return value.replace(/\D/g, '')
}
