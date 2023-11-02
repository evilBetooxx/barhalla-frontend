"use client";
import React from 'react';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-feather';
import NavBar from '@/components/common/NavBar';


function BarberForm() {
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
        name: 'BarberShop4',
        profileImage: 'barber2.jpeg',
      },
    },
    {
      id: 5,
      description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
      user: {
        name: 'BarberShop5',
        profileImage: 'barber3.jpeg',
      },
    },
    {
      id: 6,
      description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
      user: {
        name: 'BarberShop6',
        profileImage: 'barber1.png',
      },
    },
    {
      id: 7,
      description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
      user: {
        name: 'BarberShop7',
        profileImage: 'barber1.png',
      },
    },
    {
      id: 8,
      description: 'Mi primer corte de cabello, espero que me quede bien, si no, me rapo. :(',
      user: {
        name: 'BarberShop8',
        profileImage: 'barber2.jpeg',
      },
    },

  ];

  const barberPorGrupo = 9;
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
    <div className="flex justify-center items-center text-center">
      <div className="p-4" style={{ marginBottom: '100px' }}>
        <div className={barberShopsData.length > barberPorGrupo ? '' : ''}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {barbersGrupo.map((barberShop) => (
              <div key={barberShop.id} className="p-4 bg-zinc-800 rounded-md shadow-md flex">
                <div className="mr-4">
                  <img
                    src={barberShop.user.profileImage}
                    alt={barberShop.user.name}
                    className="w-80 h-40 rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-orange-500">{barberShop.user.name}</p>
                  <p className="text-lg font-semibold">{barberShop.data}</p>
                  <p className="text-gray-600">{barberShop.description}</p>
                  <button className="bg-zinc-900 border border-orange-500 hover:bg-zinc-950 text-white px-2 py-1 rounded-md mt-4">Ver mas...</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={grupoAnterior} disabled={grupoActual === 1} className="mr-2">
              <ArrowLeft size={28} />
            </button>
            <button onClick={siguienteGrupo} disabled={grupoActual === totalGrupos}>
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>
      <NavBar/>
    
    </div>
  );
}

export default BarberForm;
