import { Animal } from '@/types/types'

export const adapterAnimal = (animal: Animal) => ({
  'Nombre común': animal.common_name,
  'Nombre científico': animal.scientific_name,
  Habitat: animal.habitat,
  Dieta: animal.diet,
  Longevidad: animal.longevity,
  Altura: animal.height,
  Peso: animal.weight,
  'Población estimada': animal.population_estimate,
  'Motivos del peligro': animal.main_threats,
  'Esfuerzos de conservación': animal.conservation_efforts,
  Tipo: animal.animal_type,
  Colores: animal.color.map((color) => color),
})
