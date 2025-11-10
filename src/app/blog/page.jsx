import React from 'react'
import NeedConsultation from '../components/services/service/NeedConsultation'
import InsightStory from '../components/blogs/InsightStory'
import BlogPage from '../components/blogs/AllBlog'

export default function Blogs() {
  return (
    <div>
      <BlogPage></BlogPage>
      <InsightStory></InsightStory>
      <NeedConsultation></NeedConsultation>
    </div>
  )
}
