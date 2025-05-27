import React from 'react'
import { Button } from '@/components/ui/button'
const Page = () => {
  return (
    <>
      <h1 className='text-2xl underline'>
        Welcome to my SaaS app
      </h1>
      <a href="sign-in">
      <Button className='cursor-pointer m-2'>Sign In</Button>
      </a>
    </>
  )
}

export default Page