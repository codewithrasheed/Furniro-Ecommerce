import React from 'react'
import PageBanner from '@/components/PageBanner'
import Link from 'next/link'

const About = () => {
  return (
    <> 
        <PageBanner title={"About"} desc={"Home > About"} />
        <div className="container mx-auto px-4 md:px-0 py-10 mt-10">
          <h1 className='text-center text-4xl font-bold mb-10'>Template is not Provided for this Page</h1>
          <Link href={'/blog'} className='flex justify-center'>
          <button className='bg-[#B88E2F] text-white px-8 py-3 text-center hover:bg-[#B88E2F]'>Go to Blog Page</button>
          </Link>
        </div>
    </>
  )
}

export default About