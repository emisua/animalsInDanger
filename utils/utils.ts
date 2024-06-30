import { DangerLevel } from '@/types/types'

export function removeAccents(str: string): string {
  const accents = 'áéíóúÁÉÍÓÚñÑ'
  const accentsOut = 'aeiouAEIOUnN'
  return str
    .split('')
    .map((char) => {
      const accentIndex = accents.indexOf(char)
      return accentIndex !== -1 ? accentsOut[accentIndex] : char
    })
    .join('')
}

export function dangerColor(dangerLevel: DangerLevel) {
  switch (dangerLevel) {
    case '1':
      return 'orange-400'
      break
    case '2':
      return 'orange-500'
      break
    case '3':
      return 'red-500'
      break
    case '4':
      return 'red-600'
      break
    case '5':
      return 'red-700'
      break

    default:
      return 'white'
  }
}
