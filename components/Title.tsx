import Image from "next/image"

const Title = () => {
    return (
        <div className='max-container padding-container
    flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20
    xl:flex-row bg-bg-img-2'>
            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h1 className="text-center bold-40 text-white ">¿Quieres conocer Costa Rica?</h1>
                <h2 className="text-center bold-30 text-white"> Con TripMakers más que viajes, son experiencias </h2>
            </div>
        </div>
    )
}

export default Title