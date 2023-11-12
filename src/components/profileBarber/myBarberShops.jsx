"use client";
import React from 'react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import NavBar from '@/components/common/NavBar';
import Link from 'next/link';


function myBarberShops() {
    const barberShopsData = [
        {
            id: 1,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop1',
                profileImage: 'barber1.png',
            },
        },
        {
            id: 2,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop2',
                profileImage: 'barber2.jpeg',
            },
        },
        {
            id: 3,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop3',
                profileImage: 'barber3.jpeg',
            },
        },
        {
            id: 4,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop1',
                profileImage: 'barber1.png',
            },
        },
        {
            id: 5,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop2',
                profileImage: 'barber2.jpeg',
            },
        },
        {
            id: 6,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop3',
                profileImage: 'barber3.jpeg',
            },
        },
        {
            id: 7,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop1',
                profileImage: 'barber1.png',
            },
        },
        {
            id: 8,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop2',
                profileImage: 'barber2.jpeg',
            },
        },
        {
            id: 9,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop3',
                profileImage: 'barber3.jpeg',
            },
        },
        {
            id: 10,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop1',
                profileImage: 'barber1.png',
            },
        },
        {
            id: 11,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop2',
                profileImage: 'barber2.jpeg',
            },
        },
        {
            id: 12,
            description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
            user: {
                name: 'BarberShop3',
                profileImage: 'barber3.jpeg',
            },
        },
    ];

    const barberPorGrupo = 8;
    const [grupoActual, setGrupoActual] = useState(1);

    const inicioBarber = (grupoActual - 1) * barberPorGrupo;
    const barbersGrupo = barberShopsData.slice(inicioBarber, inicioBarber + barberPorGrupo);
    const totalGrupos = Math.ceil(barberShopsData.length / barberPorGrupo);

    const siguienteGrupo = () => {
        if (grupoActual < totalGrupos) {
            setGrupoActual(grupoActual + 1);
        }
    };

    const grupoAnterior = () => {
        if (grupoActual > 1) {
            setGrupoActual(grupoActual - 1);
        }
    };

    return (
        <div className="flex flex-col items-center text-center">
            <img
                src="/barhallaLogo.png"
                alt="Barhalla Logo"
                className="w-48 h-48 mt-4"
            />
            <div className="p-2" style={{ marginBottom: '100px' }}>
                <h1 className="text-2xl font-bold mb-2 text-orange-500">Mis barberías</h1>
                <div className={barberShopsData.length > barberPorGrupo ? '' : ''}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {barbersGrupo.map((barberShop) => (
                            <div key={barberShop.id} className="p-2 w-60 bg-zinc-800 rounded-md shadow-md flex flex-col justify-center items-center">
                                <img
                                    src={barberShop.user.profileImage}
                                    alt={barberShop.user.name}
                                    className="w-full md:w-28 md:h-28 rounded-lg"
                                />
                                <div className="mt-2 text-center">
                                    <p className="text-sm font-semibold text-orange-500">{barberShop.user.name}</p>
                                    <p className="text-gray-600 text-xs">{barberShop.description}</p>
                                    <Link href="/myBarber">
                                        <button className="bg-zinc-900 border border-orange-500 hover:bg-zinc-950 text-white px-2 py-1 rounded-md mt-2">
                                            Ver mas...
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-2">
                        <button onClick={grupoAnterior} disabled={grupoActual === 1} className="mr-2">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={siguienteGrupo} disabled={grupoActual === totalGrupos}>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <NavBar />
        </div>
    );
}


export default myBarberShops;