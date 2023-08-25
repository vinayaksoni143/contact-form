import Image from 'next/image'
import CotactForm from '@/components/CotactForm'

export default function Home() {
  return (
    <div className='p-4 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold'>Contact Form</h1>
      <p>Please fill form below</p>
      <CotactForm />
    </div>
  )
}
