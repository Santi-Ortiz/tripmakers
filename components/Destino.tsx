import Image from "next/image";

const Destino = ({ nombreDestino, descripcion, imagen }: { nombreDestino: string, descripcion: string, imagen: string }) => {
    return (
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between py-8 lg:py-12">
            <div className="flex flex-col lg:w-1/2 lg:mr-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">{nombreDestino}</h2>
                <p className="text-lg">{descripcion}</p>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
                <Image
                    src={imagen}
                    alt={nombreDestino}
                    width={600}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}

export default Destino;