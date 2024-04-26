import Title from "@/components/Title"
import Combos from "@/components/Combos"

export default function cart(){
    return (
        <>
            <Title titulo="Tenemos los mejores combos de atracciones y lugares que debes conocer en Costa Rica" subtitulo="" backgroundImage='/title3.jpeg'/>
            <Combos nombreCombo="Plan Aventuras Extremas" descripcion = "¡Emoción y adrenalina en medio de la exhuberante naturaleza tropical! Incluye: Rafting en los rápidos del río Pacuare, Mistico Park, senderismo en el Parque Nacional Corcovado."
                imagen = '/rafting.jpeg' />
            <Combos nombreCombo="Plan Relajación Playa" descripcion = "Playas serenas y paisajes costeros impresionantes para desconectar y relajarse. Incluye: Snorkel en la Isla del Caño, kayak en las aguas cristalinas de Manuel Antonio, caminatas en las playas de Tortuguero."
                imagen = '/tortuguero1.jpg' />
            <Combos nombreCombo="Plan Ecoturismo y Vida Silvestre" descripcion = "Exploración de la biodiversidad y los ecosistemas únicos de Costa Rica.  Incluye: Avistamiento de aves en Monteverde, Volcán Arenal, visita a la Reserva Biológica Bosque Nuboso de Santa Elena."
                imagen = '/avesmv2.jpeg' />
            <Combos nombreCombo="Plan Aventura y Cultura en la Región Centra" descripcion = "Una combinación de aventura y exploración cultural en el corazón de Costa Rica. Incluye: ruinas arqueológicas de Guayabo, rafting en el río Reventazón, recorrido por la ciudad colonial de Cartago, Monteverde."
                imagen = '/Ruins.jpeg' />
            <Combos nombreCombo="Plan Sabores Tropicales y Gastronomía Local" descripcion = "Descubrimiento de la rica cultura culinaria de Costa Rica y sus ingredientes frescos y tropicales. Incluye: Tour gastronómico en San José, visita a una finca de café en la región de Tarrazú, clase de cocina tradicional costarricense."
                imagen = '/CafeTarrazu.jpeg' />
            
        </>
    );
}