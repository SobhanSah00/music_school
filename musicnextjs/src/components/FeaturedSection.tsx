"use client"

import React from 'react'
import music_courses from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from '../components/ui/background-gradient'

interface Course { 
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  // image: string // Assuming the image property stores a path to the image file
}



function FeaturedSection() {

  const featured_courses = music_courses.courses.filter((course:Course) => course.isFeatured)



  return (
    <div className='py-12 bg-black-900'>
      <div>
        <div className='text-center'>
          <h2 className="text-base bg-gradient-to-r from-violet-100 to-violet-500 text-transparent bg-clip-text font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featured_courses.map((course:Course) => (
            <div key={course.id} className=' flex justify-center'>
              <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm '>
                <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                  <p>{course.title}</p>
                  <p>{course.description}</p>
                  <Link href={`/courses/${course.slug}`} className='mt-5 inline-block px-4 py-2 bg-black-700 rounded-lg'>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={"/courses"} className="inline-block border border-gray-500 rounded-full py-2 px-4 text-gray-500 hover:text-gray-700 hover:border-gray-700">
          <span className=" text-white">View All Courses</span>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedSection