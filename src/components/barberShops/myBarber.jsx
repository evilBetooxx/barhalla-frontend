import React from 'react';
import Services from "@/components/barberShops/services"
import NavBar from "@/components/common/NavBar"
import Link from 'next/link';

function MyBarber() {
    const barberShopName = "My Barber champo";
    const barberDescription = "¡La mejor barbería en la ciudad! Ofrecemos cortes de cabello y afeitados de primera clase.¡La mejor barbería en la ciudad! Ofrecemos cortes de cabello y afeitados de primera clase.¡La mejor barbería en la ciudad! Ofrecemos cortes de cabello y afeitados de primera clase.¡La mejor barbería en la ciudad! Ofrecemos cortes de cabello y afeitados de primera clase.";

    const barberLogoUrl = "/barber3.jpeg";

    return (
        <div className="p-8 flex flex-col items-center relative" style={{ marginBottom: '100px' }}>
            <img
                src="/barhallaLogo.png"
                alt="Barhalla Logo"
                className="w-16 h-16 mr-4 sm:w-32 sm:h-32 md:w-18 md:h-18 lg:w-25 lg:h-25 xl:w-32 xl:h-32 absolute right-4 mt-[-20px] sm:right-8 sm:mt-[-40px] md:right-12 md:mt-[-50px] lg:right-16 lg:mt-[-30px] xl:right-20 xl:mt-[-40px]"
            />

            <h1 className="text-2xl font-semibold text-center sm:text-left md:text-center lg:text-left xl:text-left text-orange-600 mr-4">
                {barberShopName}
            </h1>
            <hr className="w-full mt-4 sm:mt-12 border-t-2 border-orange-500" />
            <img
                src={barberLogoUrl}
                alt="Barber Logo"
                className="w-80 h-80 rounded-lg max-w-full mt-4"
            />

            <p className="text-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 xl:w-2/3 " style={{ textAlign: "justify" }}>
                {barberDescription}
            </p>
            <hr className="w-full mt-4 sm:mt-12 border-t-2 border-orange-500" />
            <Services />
            <hr className="w-full mt-4 sm:mt-2 border-t-2 border-orange-500" />
            <div>
                <Link href="/createAppointment">
                    <button className="bg-orange-500 text-white rounded-lg p-2 px-6 mt-4 hover:bg-orange-600">
                        Agendar Cita
                    </button>
                </Link>

            </div>
            <hr className="w-full mt-4 sm:mt-4 border-t-2 border-orange-500" />
            <NavBar />
        </div>
    );
}

export default MyBarber;
