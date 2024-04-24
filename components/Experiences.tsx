import Image from 'next/image'

interface ActivitiesProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}


const Activities = ({ backgroundImage, title, subtitle }: ActivitiesProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>

      <div className="flex h-full flex-col items-start justify-between
      p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="Folded Map"
              width={28}
              height={28}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'> {subtitle}</p>


          </div>
        </div>
      </div>
    </div>

  )
}

const Experiences = () => {
  return (

    <section className=" 2xl:max-container
    relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">

      <div className='hide-scrollbar flex h-[340px] w-full items-start
      justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>

        <Activities
          backgroundImage='bg-bg-img-1'
          title='Senderismo / Hiking'
          subtitle='Disfruta de las mejores caminatas por los bosques más exhuberantes de Costa Rica'
        />
        <Activities
          backgroundImage='bg-bg-img-2'
          title='Quads'
          subtitle='Embárcate en una emocionante aventura todo terreno y descubre la belleza natural de Costa Rica mientras recorres senderos selváticos y terrenos desafiantes en nuestros quads.'

        />
        <Activities
          backgroundImage='bg-bg-img-2'
          title='Rappel'
          subtitle='Subtitulo 3'

        />
        <Activities
          backgroundImage='bg-bg-img-2'
          title='Actividad 2'
          subtitle='Subtitulo 2'

        />

      </div>

      <div className='flexEnd mt-10 px:6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px]
        xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize text-white'>
            <strong>¿No sabes a donde ir</strong> y qué lugares visitar?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Con TripMakers vas a encontrar y disfrutar de las mejores actividades que vas a encontrar en todo Costa Rica. ¡Confía en nosotros!
          </p>
          <Image 
            src="/quote.svg"
            alt = "camp-2"
            width={186}
            height={219}
            className='camp-quote'
          
          />


        </div>


      </div>
    </section>

  )
}

export default Experiences