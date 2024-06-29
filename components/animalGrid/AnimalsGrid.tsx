import { Animal } from '@/types/types'
import AnimalCard from '../animalCard/AnimalCard'

export const AnimalsGrid = ({ animals }: { animals: Animal[] }) => {
  return (
    <section className='grid grid-cols-4 gap-4 my-8'>
      {animals?.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </section>
  )
}
