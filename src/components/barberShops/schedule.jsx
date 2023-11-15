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
    <div className="max-w-screen-md mx-auto">
      <h2 className="text-xl font-bold mt-4 mb-4 text-center text-orange-500">Horario</h2>
      <table className="w-full border-b-2 border-orange-500 mb-4 bg-zinc-900 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border-b-2 border-orange-500 p-3 bg-zinc-800 text-center text-white">Hora</th>
            <th className="border-b-2 border-orange-500 p-3 bg-zinc-800 text-center text-white">Disponibilidad</th>
          </tr>
        </thead>
        <tbody>
          {availability.map((slot, index) => (
            <tr key={index}>
              <td className="border-b-2 border-orange-500 p-3 text-center">{slot.time}</td>
              <td className="border-b-2 border-orange-500 p-3 text-center">
                {slot.available ? (
                  <button
                    onClick={() => handleButtonClick(index)}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition-all"
                  >
                    Disponible
                  </button>
                ) : (
                  <button className="bg-zinc-950 border border-zinc-800 text-white p-2 rounded-md" disabled>
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
