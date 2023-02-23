import { AttrCard } from '@/types/types'
import React from 'react'

const AttributesCard = ({traitType, traitValue, score}: AttrCard) => {
  return (
    <div className='text-black'>
        <div className='flex-row flex justify-between px-1 py-2 font-semibold'>
            <div>{traitType}</div>
            <div className='text-emerald-600'>{'+0.0'}</div>
        </div>
        <div className='flex-row flex justify-between px-3 py-1 rounded-md bg-sky-200 font-normal'>
            <div>{traitValue}</div>
            <div className='px-2 bg-white rounded-md'>{score}</div>
        </div>
    </div>
  )
}

export default AttributesCard