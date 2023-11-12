"use client";
import React, { useState } from 'react';
import Modal from '@/components/common/Modal';

function Schedule() {
  const [availability, setAvailability] = useState([
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: true },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleButtonClick = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].available = !updatedAvailability[index].available;
    setAvailability(updatedAvailability);

 
    setModalIsOpen(true);
  };

  const closeModal = () => {

    setModalIsOpen(false);
  };

  return (
    <div >
      <h2 className="text-xl font-bold mt-4 mb-4 text-center text-orange-500">Horarios Disponibles</h2>
      <table className="border-collapse w-2/3 mx-auto mb-4 bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border border-zinc-900 p-3 bg-zinc-800 text-center">Hora</th>
            <th className="border border-zinc-900 p-3 bg-zinc-800 text-center">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          {availability.map((slot, index) => (
            <tr key={index}>
              <td className="border border-zinc-800 bg-zinc-900 p-3 text-center">{slot.time}</td>
              <td className="border border-zinc-800 bg-zinc-900 p-3 text-center">
                {slot.available ? (
                  <button
                    onClick={() => handleButtonClick(index)}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition-all flex items-center justify-center "
                  >
                    Disponible
                  </button>
                ) : (
                  <button className="bg-gray-400 text-white p-2 rounded-md" disabled>
                    Ocupado
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
}

export default Schedule;
