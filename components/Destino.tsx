import Image from "next/image";

const Destino = ({ nombreDestino, descripcion, imagen, disposicion }: { nombreDestino: string, descripcion: string, imagen: string, disposicion: string }) => {
    const imagenDerecha = disposicion === 'right';

    return (
        <div className={`max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between py-8 lg:py-12 ${imagenDerecha ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`flex flex-col lg:w-1/2 lg:ml-8 lg:mr-4 lg:pt-4 ${imagenDerecha ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{nombreDestino}</h2>
                    <div className="flex-grow flex flex-col justify-center">
                        <p className="text-lg lg:text-xl mb-4">{descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                        src={imagen}
                        alt={nombreDestino}
                        width={600}
                        height={400}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Destino;
