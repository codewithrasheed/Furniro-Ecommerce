import React from 'react'
import PageBanner from '@/components/PageBanner'
import BlogPage from '@/components/Blogs'

const Blog = () => {
  return (
    <>
     <PageBanner title={"Blog"} desc={"Home > Blog"} />
     <BlogPage />
    </>
  )
}

export default Blog