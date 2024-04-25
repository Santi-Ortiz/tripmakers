import Title from "@/components/Title";
import AboutUs from "@/components/AboutUs";
import Experiences from "@/components/Experiences";
import Features from "@/components/Features";
import Image from "next/image";

export default function Home() {

  return (
    <>

      <Title titulo="¿Quieres conocer Costa Rica?" subtitulo="Con TripMakers más que viajes, son experiencias" backgroundImage='/bg-title.jpg'/>
      <AboutUs />
      <Experiences />
      <Features />
    </>
  );
}
