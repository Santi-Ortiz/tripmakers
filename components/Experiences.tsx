import Image from 'next/image'

interface ActivitiesProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}


const Activities = ({ backgroundImage, title, subtitle }: ActivitiesProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`} style={{ opacity: 0.8 }}>

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
            <h4 className='bold-32 text-white'>{title}</h4>
            <p className='medium-16 text-white'> {subtitle}</p>


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
          subtitle='Sumérgete en la asombrosa diversidad natural de Costa Rica mientras exploras sus senderos. Desde bosques nubosos hasta selvas tropicales y volcanes activos, este país ofrece una variedad de paisajes para que los entusiastas del senderismo disfruten. Con opciones para todos los niveles de habilidad y guías locales conocedores, el senderismo en Costa Rica es una experiencia inolvidable que te permite conectar profundamente con la naturaleza y descubrir la riqueza natural de este hermoso país.'
        />
        <Activities
          backgroundImage='bg-bg-img-2'
          title='Quads'
          subtitle='Embárcate en una emocionante aventura todo terreno y descubre la belleza natural de Costa Rica mientras recorres senderos selváticos y terrenos desafiantes en nuestros quads.'

        />
        <Activities
          backgroundImage='bg-bg-img-3'
          title='Rappel'
          subtitle='Explora los cañones espectaculares de Costa Rica con una emocionante aventura de rappel. Desciende por imponentes cascadas y acantilados mientras experimentas la adrenalina y la emoción de desafiar la gravedad en medio de paisajes naturales impresionantes. Con guías expertos que te acompañarán en cada paso, esta experiencia te ofrece la oportunidad de conectar con la naturaleza de una manera única y emocionante, mientras creas recuerdos inolvidables en este paraíso tropical'

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