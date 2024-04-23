import Image from "next/image"

const AboutUs = () => {
  return (
    <section className='max-container padding-container
    flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20
    xl:flex-row '>

      {/* LEFT */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>

        <h1 className='bold-52 lg:bold-88'>¿Quiénes somos?</h1>
        <section className="max-w-[700px] padding-container mt-9
    flex flex-col gap-10 py-10 pb-15 md:gap-28 lg:py-20 bg-gray-300 lg:rounded-3xl 2xl:rounded-5xl lg:ml-10" >

          <p className='regular-16 mt-6 text-gray-30 xl: max-w-[520px] '>
            En TripMakers nos enorgullece ser el vínculo entre viajeros y las experiencias inolvidables que Costa Rica tiene por ofrecer.  Con un enfoque en el turismo sostenible y la exploración auténtica, estamos aquí para guiar a nuestros clientes en cada paso de su viaje. Te invitamos a descubrir Costa Rica con nosotros y convertirte en un verdadero TripMaker
          </p>

        </section>
      </div>

      
    </section>
  )
}

export default AboutUs