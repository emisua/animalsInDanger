// lib/types/supabase.ts

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
  path: string
}

export interface Database {
  public: {
    Tables: {
      animals: {
        Row: Animal
        Insert: Omit<Animal, 'id'>
        Update: Partial<Animal>
      }
    }
  }
}
