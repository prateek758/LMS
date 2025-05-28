import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'> Start Learning</div>
        <h2 className='text-3xl font-bold'>
          Build and Personalize Learning Companion
        </h2>
        <p>Pick a name, subject, voice and personality and start learning</p>
        <Image src='/images/cta.svg' alt='cta' height={232} width={362}></Image>
        <Button className='btn-primary'>
          <Image src='/icons/plus.svg' alt='plus' width={12} height={12}/>
          <Link href='/companions/new'>
            <p>
              Build a new companion
            </p>
          </Link>
        </Button>
    </section>
  )
}

export default Cta