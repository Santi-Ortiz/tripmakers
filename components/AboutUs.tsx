import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      {/* LEFT */}
      <div className="flex-1">
        <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-900">¿Quiénes somos?</h1>
        <div className="max-w-md lg:max-w-lg xl:max-w-2xl bg-gray-100 rounded-xl p-6 lg:p-8">
          <p className="text-lg lg:text-xl text-gray-800">
            En TripMakers nos enorgullece ser el vínculo entre viajeros y las experiencias inolvidables que Costa Rica tiene por ofrecer. Con un enfoque en el turismo sostenible y la exploración auténtica, estamos aquí para guiar a nuestros clientes en cada paso de su viaje. Te invitamos a descubrir Costa Rica con nosotros y convertirte en un verdadero TripMaker.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center items-center flex-1">
        <Image src="/logo-tripmakers.png" alt="Imagen" width={300} height={300} className="rounded-xl" />
      </div>
    </section>
  );
};

export default AboutUs;
