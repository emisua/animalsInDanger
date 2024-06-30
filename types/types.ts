export type DangerLevel = '1' | '2' | '3' | '4' | '5'

type ConservationStatus =
  | 'Preocupación menor'
  | 'Vulnerable'
  | 'En peligro'
  | 'En peligro crítico'
  | 'Extinto (funcionalmente extinto en la naturaleza)'

export interface Animal {
  id: string
  common_name: string
  scientific_name: string
  habitat: string
  diet: string
  conservation_status: ConservationStatus
  longevity: string
  height: string
  weight: string
  animal_type: string
  geographic_distribution: string
  population_estimate: string
  main_threats: string
  conservation_efforts: string
  color: string[]
  images: string[]
  path: string
  danger_level: DangerLevel
}

export type animalWithoutId = Omit<Animal, 'id'>
