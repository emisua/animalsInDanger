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
