import Image from 'next/image'
import React from 'react'

const notFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <Image src={"/error.png"} alt='404 - Page Not Found' width={500} height={500} />
    </div>
  )
}

export default notFound
