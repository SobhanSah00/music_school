import Link from 'next/link'
import React from 'react'

function UpcommingWebinars() {

    

  return (
    <div className='p-12 bg-gradient-to-b from-black to-gray-900'>
        <div className='max-w-7xl max-auto px-4 sm-px-6'>
            <div className='text-center'>
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>2</div>
            <div className='mt-10 text-center'>
                <Link href={"/"} className='inline-block border border-gray-500 rounded-full py-2 px-4 text-gray-500 hover:text-gray-700 hover:border-gray-700'>
                    View All webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcommingWebinars