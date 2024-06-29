export interface Animal {
  id: string
  common_name: string
  scientific_name: string
  habitat: string
  diet: string
  conservation_status: string
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
}

export type animalWithoutId = Omit<Animal, 'id'>
