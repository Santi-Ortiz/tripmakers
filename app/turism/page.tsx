import Title from "@/components/Title";
import Destino from "@/components/Destino";

export default function turism(){
    const destinos = [{
        nombre: "Volcán Arenal",
        descripcion: "El Volcán Arenal es una maravilla natural fascinante y un lugar turístico que no te debés perder, es el punto más alto de La Fortuna y se distingue a nivel mundial por ser uno de los volcanes cónicos más perfectos. También podrás encontrar aguas termales, cascadas, bosques, lagos, cavernas y bellas calles tradicionales.",
        imagen: "/volcan-arenal.jpg"
    },
    {
        nombre: "Mistico Park",
        descripcion: "Mistico Park es un destino turístico que no podés dejar de visitar, es un lugar lleno de naturaleza, playas, bosques y vida silvestre. En Mistico Park podrás disfrutar de actividades como kayak, senderismo, observación de aves, entre otros. Además, podrás disfrutar de la gastronomía local y de la calidez de su gente",
        imagen: "/mistico-park.jpeg"
    },
    {
        nombre: "Monteverde",
        descripcion: "Monteverde cuenta con una naturaleza avasalladora; es un lugar turístico con una merecida fama internacional como joya de bosque nuboso, con paisajes sobrecogedores que ofrecen aventuras por doquier. Su riqueza natural posee el 2.5% de la biodiversidad mundial.",
        imagen: '/monteverde.jpeg'
    },
    {
        nombre: "Parque Nacional Manuel Antonio",
        descripcion: "Manuel Antonio es un destino turístico que no podés dejar de visitar, es un lugar lleno de naturaleza, playas, bosques y vida silvestre. En Manuel Antonio podrás disfrutar de actividades como kayak, snorkel, surf, senderismo, observación de aves, entre otros. Además, podrás disfrutar de la gastronomía local y de la calidez de su gente.",
        imagen: '/manuel-antonio.jpeg'
    },
    {
        nombre: "Parque Nacional Tortuguero",
        descripcion: "Tortuguero es un destino turístico que no podés dejar de visitar, es un lugar lleno de naturaleza, playas, bosques y vida silvestre. En Tortuguero podrás disfrutar de actividades como kayak, senderismo, observación de tortugas, entre otros. Además, podrás disfrutar de la gastronomía local y de la calidez de su gente.",
        imagen: '/tortuguero.jpeg'
    },
    {
        nombre: "Parque Nacional Corcovado",
        descripcion: "Corcovado es un destino turístico que no podés dejar de visitar, es un lugar lleno de naturaleza, playas, bosques y vida silvestre. En Corcovado podrás disfrutar de actividades como kayak, senderismo, observación de aves, entre otros. Además, podrás disfrutar de la gastronomía local y de la calidez de su gente.",
        imagen: '/corcovado.jpeg'
    },
    {
        nombre: "Parque Nacional Rincón de la Vieja",
        descripcion: "Rincón de la Vieja es un destino turístico que no podés dejar de visitar, es un lugar lleno de naturaleza, playas, bosques y vida silvestre. En Rincón de la Vieja podrás disfrutar de actividades como kayak, senderismo, observación de aves, entre otros. Además, podrás disfrutar de la gastronomía local y de la calidez de su gente.",
        imagen: '/rincon-vieja.jpg'
    },
    {
        nombre: "Poas Volcano National Park",
        descripcion: "Poas Volcano es un destino turístico que no podés dejar de visitar, es un lugar lleno de naturaleza, playas, bosques y vida silvestre. En Poas Volcano podrás disfrutar de actividades como kayak, senderismo, observación de aves, entre otros. Además, podrás disfrutar de la gastronomía local y de la calidez de su gente.",
        imagen: '/poas-volcano.jpg'
    }
]
    return (
        <>
            <Title titulo="Conoce los mejores destinos turisticos de Costa Rica" subtitulo="" backgroundImage='/title.jpg'/>
            {destinos.map((destino, index) => (
                <Destino nombreDestino={destino.nombre} descripcion = {destino.descripcion} imagen = {destino.imagen} 
                disposicion = {index % 2 == 1 ? 'right' : 'left'} />
            ))}
        </>
    );
}