import { Animal } from '@/types/types'
import AnimalCard from '../animalCard/AnimalCard'

export const AnimalsGrid = ({ animals }: { animals: Animal[] }) => {
  return (
    <section className='grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4 my-8'>
      {animals?.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </section>
  )
}
