import React from 'react'

const AboutUs = () => {
  return (
    <section className='max-container padding-container
    flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20
    xl:flex-row '>

      {/* LEFT */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        <h1 className='bold-40 lg:bold-50'>¿Quiénes somos?</h1>
        <section className="max-w-[450px] padding-container mt-9
    flex flex-col gap-10 py-10 pb-15 md:gap-28 lg:py-20 bg-gray-300 lg:rounded-3xl 2xl:rounded-5xl" >

          <p className='regular-16 mt-6 text-gray-30 xl: max-w-[520px] '>
            Somos...
          </p>

        </section>
      </div>
    </section>
  )
}

export default AboutUs