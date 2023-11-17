"use client";
import React from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import NavBar from "@/components/common/NavBar";

function AppointmentHistory() {
  const appointmentsData = [
    {
      id: 1,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
    {
      id: 2,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
    {
      id: 3,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
    {
      id: 4,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
    {
      id: 5,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
    {
      id: 6,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
    {
      id: 7,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
    {
      id: 8,
      data: "10/10/2021",
      time: "10:00 AM",
      service: "Corte de Cabello",
      payment: "50%",
      user: {
        name: "Kanye Ojendis",
        profileImage: "y.jpeg",
      },
    },
  ];

  const citasPorGrupo = 6;
  const [grupoActual, setGrupoActual] = useState(1);

  const inicioCita = (grupoActual - 1) * citasPorGrupo;
  const citasGrupo = appointmentsData.slice(
    inicioCita,
    inicioCita + citasPorGrupo
  );
  const totalGrupos = Math.ceil(appointmentsData.length / citasPorGrupo);

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
      <div className="p-4" style={{ marginBottom: "100px" }}>
        <img
          src="/barhallaLogo.png"
          alt="Barhalla Logo"
          className="w-40 h-40 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-10 text-orange-500">
          Historial de citas
        </h1>
        <div className={appointmentsData.length > citasPorGrupo ? " " : ""}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {citasGrupo.map((appointment) => (
              <div
                key={appointment.id}
                className="p-4 bg-zinc-800 rounded-md shadow-md flex justify-between items-center"
              >
                <div className="border-r-2 border-orange-500 pr-4">
                  <p className="text-lg font-semibold">{appointment.data}</p>
                  <p className="text-gray-600">{appointment.time}</p>
                  <p className="text-gray-600">{appointment.service}</p>
                  <p className="text-gray-600">
                    Payment: {appointment.payment}
                  </p>
                  <button className="bg-zinc-900 border border-orange-500 hover.bg-zinc-950 text-white px-2 py-1 rounded-md">
                    Editar Cita
                  </button>
                </div>
                <div className="flex items-center">
                  <img
                    src={appointment.user.profileImage}
                    alt={appointment.user.name}
                    className="w-20 h-20 ml-5 rounded-lg mr-2"
                  />
                  <p className="text-lg font-semibold">
                    {appointment.user.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={grupoAnterior}
              disabled={grupoActual === 1}
              className="mr-2"
            >
              <ArrowLeft size={28} />
            </button>
            <button
              onClick={siguienteGrupo}
              disabled={grupoActual === totalGrupos}
            >
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default AppointmentHistory;
