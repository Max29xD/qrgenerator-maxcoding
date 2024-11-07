'use client'

import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface UploadImage {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function UploadImage({ onChange }: UploadImage) {
  const [drag, setDrag] = useState<boolean>(false)

  return (
    <div
      className={twMerge(
        'relative border-2 border-dotted px-4 py-8 border-white text-white hover:text-max hover:border-max rounded-2xl m-auto grid place-items-center text-center transition-colors duration-300 cursor-pointer',
        drag ? 'bg-white/30' : 'bg-transparent'
      )}
    >
      <input
        id='input-upload'
        className='absolute w-full h-full opacity-0 cursor-pointer'
        type='file'
        onChange={onChange}
        onDragEnter={() => setDrag(true)}
        onDragLeave={() => setDrag(false)}
        onDrop={() => setDrag(false)}
      />
      <p className='hyphens-none font-semibold'>
        Arrastra o haz click para seleccionar un foto
      </p>
      <p className='hyphens-none font-semibold text-maxpurple-500'>
        Preferentemente cuadrada
      </p>
    </div>
  )
}
