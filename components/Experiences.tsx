import Image from "next/image";

interface ActivitiesProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const Activities = ({ backgroundImage, title, subtitle }: ActivitiesProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div
        className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10"
        style={{
          backgroundColor: 'rgba(85, 85, 85, 0.5)',
          borderRadius: '5%',
        }}
      >
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="Folded Map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold text-white text-2xl lg:text-3xl">{title}</h4>
            <p className="text-white text-lg lg:text-xl">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:px-8 py-10 lg:mb-10 lg:py-20 xl:mb-20 relative flex flex-col">
      <div className="flex h-[340px] lg:h-[400px] xl:h-[640px] overflow-x-auto gap-8">
        <Activities
          backgroundImage="bg-bg-img-1"
          title="Senderismo / Hiking"
          subtitle="Sumérgete en la asombrosa diversidad natural de Costa Rica mientras exploras sus senderos. Desde bosques nubosos hasta selvas tropicales y volcanes activos, este país ofrece una variedad de paisajes para que los entusiastas del senderismo disfruten. Con opciones para todos los niveles de habilidad y guías locales conocedores, el senderismo en Costa Rica es una experiencia inolvidable que te permite conectar profundamente con la naturaleza y descubrir la riqueza natural de este hermoso país"
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
          backgroundImage='bg-bg-img-4'
          title='Rafting'
          subtitle='El rafting en Costa Rica ofrece una emocionante aventura en medio paisajes impresionantes. Con una variedad de ríos que van desde suaves corrientes aptas para principiantes hasta rápidos desafiantes para los más experimentados, Costa Rica es un paraíso para los amantes del rafting. Sumérgete en aguas cristalinas mientras desciendes por cañones escarpados y atraviesas emocionantes rápidos. El rafting en Costa Rica promete una experiencia inolvidable para todos los niveles de habilidad.'

        />

      </div>

      <div className="flex justify-end mt-10 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="font-bold text-white text-3xl md:text-4xl 2xl:text-6xl capitalize">
            <strong>¿No sabes a dónde ir</strong> y qué lugares visitar?
          </h2>
          <p className="text-white text-lg xl:text-xl mt-5">
            Con TripMakers vas a encontrar y disfrutar de las mejores actividades que vas a encontrar en todo Costa Rica.
            ¡Confía en nosotros!
          </p>
          <Image src="/quote.svg" alt="Quote" width={186} height={219} className="camp-quote" />
        </div>
      </div>
    </section>
  );
};

export default Experiences;