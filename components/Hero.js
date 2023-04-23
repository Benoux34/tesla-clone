import React from 'react'

function CAR({ name, image }) {
    return (
        <div 
            className={`h-screen w-full bg-cover bg-center snap-center snap-always`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='h-[45%] flex flex-col items-center justify-center space-y-3'>
                <h1 className='text-5xl font-semibold'>{name}</h1>
                <span className='text-sm underline underline-offset-4 cursor-pointer'>Réservez votre essai</span>
            </div>

            <div className='h-[55%]'>
                <div className='h-[50%] xl:h-[70%]' />
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <div className='flex flex-col xl:flex-row items-center justify-center space-x-0 xl:space-x-5 space-y-4 xl:space-y-0'>
                        <button className='h-[40px] w-[320px] bg-[#3e3f44] text-white font-semibold rounded-md'>Découvrir nos véhicules disponibles</button>
                        <button className='h-[40px] w-[320px] bg-[#EAE9E9] text-black font-semibold rounded-md'>Configuration personalisée</button>
                    </div>
                    <span className='text-sm underline underline-offset-4 cursor-pointer'>
                        En savoir plus sur Tesla for Business
                    </span>
                </div>
            </div>
        </div>
    )
}

function Other({ name, image }) {
    return (
        <div 
            className={ name == 'Accessoires' ? 'h-screen w-full bg-[#F8F8F8] bg-contain bg-no-repeat bg-center snap-center snap-always' : 'h-screen w-full bg-[#F8F8F8] bg-cover bg-center snap-center snap-always'}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='h-[35%] flex flex-col items-center justify-center space-y-3'>
                <h1 className='text-3xl text-center xl:text-5xl font-semibold'>{name}</h1>
            </div>

            <div className='h-[70%]'>
                <div className='h-[50%] xl:h-[70%]' />
                <div className='flex flex-col items-center justify-center'>
                    <button className='h-[40px] w-[260px] bg-[#3e3f44] text-white font-semibold rounded-md'>
                        En savoir plus
                    </button>
                </div>
            </div>
        </div>
    )
}

function Hero() {
  return (
    <section className="h-screen snap snap-y overflow-y-scroll overflow-x-hidden">
        <CAR 
            name="Model Y"
            image="tesla-modelY.jpg"
        />
        <CAR 
            name="Model 3"
            image="tesla-model3.webp"
        />
        <CAR 
            name="Model S"
            image="tesla-modelS.webp"
        />
        <CAR 
            name="Model X"
            image="tesla-modelX.webp"
        />
        <Other
            name="Systèmes d'énergie solaire et Powerwalls"
            image="tesla-energie.jpg"
        />
        <Other
            name="Accessoires"
            image="test.avif"
        />
    </section>
  )
}

export default Hero