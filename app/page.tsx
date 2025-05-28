import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>
        Popular Companions
      </h1>

      <section className='home-section'>
        <CompanionCard
        id='123'
        name='Science Tutor'
        topic='Neural Network of the Brain'
        subject='Science'
        duration={45}
        color='#ffda6e'
        />
       <CompanionCard
        id='456'
        name='Maths Tutor'
        topic='Derivatives and Intergals'
        subject='Mathematics'
        duration={45}
        color='#e5d0ff'
        />
        <CompanionCard
        id='789'
        name='Grammer Tutor'
        topic='Language Learning'
        subject='English Literature'
        duration={45}
        color='#bde7ff'
        />
      </section>

      <section className='home-section'>
        <CompanionsList
        title='Recently Completed Sessions'
        companions={recentSessions}
        classNames='w-2/3 max-lg:w-full'
        />
        <Cta/>
      </section>
    </main>
  )
}

export default Page