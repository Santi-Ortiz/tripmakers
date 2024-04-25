import Image from "next/image";

const Combos = ({ nombreCombo, descripcion, imagen }: { nombreCombo: string, descripcion: string, imagen: string }) => {
    return (
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between py-8 lg:py-12">
            <div className="flex flex-col lg:w-1/2 lg:mr-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-green-75">{nombreCombo}</h2>
                <p className="text-lg">{descripcion}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition-colors duration-300 mt-4"> Agregar al carrito</button>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
                <Image
                    src={imagen}
                    alt={nombreCombo}
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}

export default Combos;