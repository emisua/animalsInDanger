/* eslint-disable @next/next/no-img-element */
import { Animal } from '@/types/types'
import React from 'react'

const AnimalCard = ({ animal }: { animal: Animal }) => {
  return (
    <article className='flex flex-row items-center gap-4 border p-2 rounded-md border-gray-700/50'>
      <div className='img max-w-16 rounded-full overflow-hidden'>
        <img
          src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLglv08LlfTQb9L1rHlxFIkSJ72agTTuhsLP3kB53unIwTtqaJ'
          alt={animal.common_name}
        />
      </div>
      <div className='content flex flex-col justify-center'>
        <h4 className='font-bold'>
          {animal.common_name}
          <span className='italic font-light opacity-50 pl-1'>
            ({animal.scientific_name})
          </span>
        </h4>
        <p>{animal.conservation_status}</p>
      </div>
    </article>
  )
}

export default AnimalCard
