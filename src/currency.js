// Currency, comma separated thousands, decimal point rounded, +/- signed

const digitsRE = /(\d{3})(?=\d)/g

export function currency(value, currency, decimals) {
  // Ex. value: 30500500.500
  value = parseFloat(value)

  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)

  // Ex. _int: 30500500
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified

  // Ex. i: 2
  var i = _int.length % 3

  // Ex. head: 30,
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''

  // Ex. _float: .500
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''

  var sign = value < 0 ? '-' : ''

  // Ex. _int.slice(i).replace(digitsRE, '$1,')): 500,500
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}