import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className='bg-dotted-pattern bg-primary-600 bg-contain py-5 md:py-10'>
        <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0'>
          <div className='flex flex-col justify-center gap-8'>
          <h1 className='text-4xl font-bold '>EduZenEra is the platform which make the minds sharper and bringforth the enthusiasm to all </h1>
          </div>
        </div>
      </section>
    </>
  )
}
