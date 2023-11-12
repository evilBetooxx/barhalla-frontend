
import React, { useState } from 'react';


function Modal({ isOpen, onClose }) {
  const [formaPago, setFormaPago] = useState('completo'); 

  const getStripe = () => {
    return loadStripe('tu_api_key_de_stripe');
  };

  const appointmentData = {
    imagen: 'barber1.png',
    fecha: '11 de noviembre de 2023',
    hora: '10:00 AM',
    precio: '80',
    servicio: 'Corte de pelo',
  };

  const handleFormaPagoChange = (option) => {
    setFormaPago(option);
  };

  const handlePagarPaypal = () => {

    console.log('Pagando con PayPal');
  };

  const handlePagarTarjeta = () => {
    console.log('Pagando con Tarjeta de crédito/débito');
  };

  return (
    <div className={`modal ${isOpen ? 'fixed inset-0 overflow-auto' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

       
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
        <div
          className="inline-block align-bottom bg-zinc-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div onClick={onClose} className="absolute top-0 right-0 p-4 cursor-pointer">
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <div className="sm:flex sm:items-start">
   
            <div className="sm:w-1/4">
              <img
                className="mx-auto h-32 w-32 rounded-lg"
                src={appointmentData.imagen}
                alt="Imagen de la batería"
              />
            </div>
       
            <div className="mt-3 text-left sm:mt-0 sm:ml-4">
           
              <p className="text-sm text-gray-500">Fecha: {appointmentData.fecha}</p>
          
              <p className="text-sm text-gray-500">Hora: {appointmentData.hora}</p>
             
              <p className="text-sm text-gray-500">Servicio: {appointmentData.servicio}</p>
       
              <p className="text-sm text-gray-500 font-bold mt-2">Total del servicio: ${appointmentData.precio}</p>
             
              <div className="mt-4 ">
                <p className="text-sm text-orange-500 font-bold">Forma de pago:</p>
                <label className="inline-flex items-center mt-2 mr-4 ml-4">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-orange-500"
                    checked={formaPago === 'completo'}
                    onChange={() => handleFormaPagoChange('completo')}
                  />
                  <span className="ml-2">Pagar completo</span>
                </label>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-orange-500"
                    checked={formaPago === 'mitad'}
                    onChange={() => handleFormaPagoChange('mitad')}
                  />
                  <span className="ml-2">Pagar 50%</span>
                </label>
              </div>
           
              <div className="mt-6 flex items-center">
                <button
                  onClick={handlePagarPaypal}
                  className="bg-zinc-900 border border-orange-500 hover:bg-white hover:text-black text-white px-4 py-2 rounded-md mr-4"
                >
                  Pagar con PayPal
                </button>
                <button
                  onClick={handlePagarTarjeta}
                  className="bg-zinc-900 border border-orange-500 hover:bg-white  hover:text-black text-white px-4 py-2 rounded-md "
                >
                  Pagar con Tarjeta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
