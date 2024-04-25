import Image from "next/image";

const Title = ({ titulo, subtitulo, backgroundImage }: { titulo: string, subtitulo: string, backgroundImage: string }) => {
    return (
        <div className='max-container padding-container py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'
            style={{ backgroundImage: `url(${backgroundImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
            }}>
            <h1 className="text-center bold-40 text-white">{titulo}</h1>
            <h2 className="text-center bold-30 text-white">{subtitulo}</h2>
        </div>
    );
}

export default Title;