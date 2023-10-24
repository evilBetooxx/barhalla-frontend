"use client";
import React, { useState } from "react";

function addBarber() {
  const [barberData, setBarberData] = useState({
    name: "",
    state: "",
    city: "",
    street: "",
    logo: null,
    services: [{ serviceName: "", servicePrice: "" }],
    workingDays: { startDay: "", endDay: "" },
    workingHours: { startTime: "", endTime: "" },
  });

  const handleChange = (e, index) => {
    const { name, value, files } = e.target;

    if (name === "logo") {
      setBarberData({
        ...barberData,
        logo: files[0],
      });
    } else if (name === "serviceName" || name === "servicePrice") {
      const updatedServices = [...barberData.services];
      updatedServices[index] = {
        ...updatedServices[index],
        [name]: value,
      };

      setBarberData({
        ...barberData,
        services: updatedServices,
      });
    } else if (
      name === "startDay" ||
      name === "endDay" ||
      name === "startTime" ||
      name === "endTime"
    ) {
      setBarberData({
        ...barberData,
        workingDays: {
          ...barberData.workingDays,
          [name]: value,
        },
        workingHours: {
          ...barberData.workingHours,
          [name]: value,
        },
      });
    } else {
      setBarberData({
        ...barberData,
        [name]: value,
      });
    }
  };

  const addService = () => {
    setBarberData({
      ...barberData,
      services: [...barberData.services, { serviceName: "", servicePrice: "" }],
    });
  };

  const removeService = (index) => {
    const updatedServices = [...barberData.services];
    updatedServices.splice(index, 1);
    setBarberData({
      ...barberData,
      services: updatedServices,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(barberData);
  };

  return (
    <div className="max-w-md mx-auto sm:mt-0 p-8  rounded-lg shadow-md">
      <div className="mb-4 text-center">
        <img
          src="/barhallaLogo.png"
          alt="Barhalla Logo"
          className="mx-auto h-40 h40"
        />
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        Agregar Barbería
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Nombre de la Barbería
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={barberData.name}
            placeholder="barhhalla"
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-white"
          >
            Estado
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={barberData.state}
            placeholder="Chiapas"
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-white"
          >
            Ciudad
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Tuxtla Gutiérrez"
            value={barberData.city}
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="street"
            className="block text-sm font-medium text-white"
          >
            Calle
          </label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Calle 1 #123"
            value={barberData.street}
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDay"
            className="block text-sm font-medium text-white"
          >
            Día de Inicio de Trabajo
          </label>
          <input
            type="text"
            id="startDay"
            name="startDay"
            value={barberData.workingDays.startDay}
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
            placeholder="Día de inicio (e.g., Lunes)"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDay"
            className="block text-sm font-medium text-white"
          >
            Día de Fin de Trabajo
          </label>
          <input
            type="text"
            id="endDay"
            name="endDay"
            value={barberData.workingDays.endDay}
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
            placeholder="Día de fin (e.g., Viernes)"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-sm font-medium text-white"
          >
            Hora de Inicio de Trabajo
          </label>
          <input
            type="text"
            id="startTime"
            name="startTime"
            value={barberData.workingHours.startTime}
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
            placeholder="Hora de inicio (e.g., 09:00 AM)"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endTime"
            className="block text-sm font-medium text-white"
          >
            Hora de Fin de Trabajo
          </label>
          <input
            type="text"
            id="endTime"
            name="endTime"
            value={barberData.workingHours.endTime}
            onChange={(e) => handleChange(e, null)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
            placeholder="Hora de fin (e.g., 05:00 PM)"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Servicios
          </label>
          {barberData.services.map((service, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="serviceName"
                value={service.name}
                onChange={(e) => handleChange(e, index)}
                className="w-1/2 p-2 border border-gray-300 rounded-lg text-white bg-black mb-4"
                placeholder="Nombre del servicio"
              />
              <input
                type="number"
                name="servicePrice"
                value={service.price}
                onChange={(e) => handleChange(e, index)}
                className="w-1/2 p-2 border border-gray-300 rounded-lg text-white bg-black mb-4"
                placeholder="$$"
              />
              <button
                type="button"
                onClick={() => removeService(index)}
                className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg mb-4"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addService}
            className="bg-zinc-700 hover:bg-zinc-800 text-white py-2 px-4 rounded-lg"
          >
            Agregar Servicio
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="logo"
            className="block text-sm font-medium text-white"
          >
            Logo de la Barbería
          </label>
          <div className="relative">
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={(e) => handleChange(e, null)}
              className="sr-only"
            />
            <button
              type="button"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-white bg-black"
              onClick={() => document.getElementById("logo").click()}
            >
              Seleccionar Archivo
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg"
          >
            Agregar Barbería
          </button>
        </div>
      </form>
    </div>
  );
}

export default addBarber;
