"use client";
import React, { useState, useRef } from 'react';
import NavBar from '@/components/common/NavBar';

function BarberForm() {
  const [step, setStep] = useState(1);
  const [barberName, setBarberName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState(null);
  const [workDays, setWorkDays] = useState([]);
  const [workHours, setWorkHours] = useState('');
  const [services, setServices] = useState([{ name: '', price: '' }]);
  const [locations, setLocations] = useState([{ city: '', street: '' }]);
  const [barberImages, setBarberImages] = useState([]);




  const fileInputRef = useRef(null);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const addService = () => {
    setServices([...services, { name: '', price: '' }]);
  };

  const removeService = (index) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  const addLocation = () => {
    setLocations([...locations, { city: '', street: '' }]);
  };

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedServices = [...services];
    updatedServices[index][name] = value;
    setServices(updatedServices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const cities = [
    'Ciudad 1',
    'Ciudad 2',
    'Ciudad 3',
    'Ciudad 4',
    'Ciudad 5',
    'Ciudad 6',
    'Ciudad 7',
    'Ciudad 8',
    'Ciudad 9',
    'Ciudad 10',
  ];


  return (
    <section className="p-4 mx-auto max-w-md mt-6 text-center">
      <header>
        <img src="barhallaLogo.png" alt="Barhalla Logo" className="w-40 h-40 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Registra tu Barbería</h2>
        <h3 className="font-semibold mb-4 text-orange-500">La mejor gestión para tu barbería</h3>
      </header>

      {step === 1 && (
        <form onSubmit={handleNextStep}>
          <div className="mb-4">
            <label htmlFor="barberName" className="block text-gray-300">Nombre de tu Barbería:</label>
            <input
              type="text"
              id="barberName"
              value={barberName}
              onChange={(e) => setBarberName(e.target.value)}
              placeholder='Ej. "Barbería de Don Pepe"'
              className="w-full border rounded-lg px-3 py-2 bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-300">Descripción corta:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Descripción de tu barbería'
              className="w-full border rounded-lg px-3 py-2 bg-transparent"
              rows="3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-300">Ciudad:</label>
            <select
              id="city"
              value={locations[0].city}
              onChange={(e) => {
                const updatedLocations = [...locations];
                updatedLocations[0].city = e.target.value;
                setLocations(updatedLocations);
              }}
              className="w-full border rounded-lg px-3 py-2 bg-zinc-950"
            >
              <option value="">Selecciona una ciudad</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>


          <div className="mb-4">
            <label htmlFor="street" className="block text-gray-300">Calle:</label>
            <input
              type="text"
              id="street"
              value={locations[0].street}
              onChange={(e) => {
                const updatedLocations = [...locations];
                updatedLocations[0].street = e.target.value;
                setLocations(updatedLocations);
              }}
              placeholder="Ej. Calle de Ejemplo"
              className="w-full border rounded-lg px-3 py-2 bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="logo" className="block text-gray-300">Subir Logo:</label>
            <button
              onClick={handleFileButtonClick}
              className="w-full border rounded-lg px-3 py-2 bg-transparent cursor-pointer"
            >
              Subir Archivo
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleLogoChange}
              style={{ display: 'none' }}
            />
          </div>

          {logo && (
            <img src={logo} alt="Logo Preview" className="w-24 h-24 mx-auto mb-4" />
          )}

          <button type="submit" className="bg-zinc-800 hover:bg-zinc-900 text-white px-6 py-2 rounded-lg">Siguiente Paso</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="workDays" className="block text-gray-300">Días de trabajo:</label>
            <input
              type="text"
              id="workDays"
              value={workDays.join(', ')}
              onChange={(e) => setWorkDays(e.target.value.split(', '))}
              placeholder='Ej. "Lunes, Martes, Miércoles"'
              className="w-full border rounded-lg px-3 py-2 bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="workHours" className="block text-gray-300">Horario de trabajo:</label>
            <input
              type="text"
              id="workHours"
              value={workHours}
              onChange={(e) => setWorkHours(e.target.value)}
              placeholder='Ej. "8:00 AM - 6:00 PM"'
              className="w-full border rounded-lg px-3 py-2 bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="workHours" className="block text-gray-300">Servicios:</label>
            {services.map((service, index) => (
              <div key={index}>
                <input
                  type="text"
                  name="name"
                  value={service.name}
                  onChange={(e) => handleServiceChange(e, index)}
                  placeholder="Nombre del servicio"
                  className="w-full border rounded-lg px-3 py-2 bg-transparent mb-4"
                />
                <input
                  type="number"
                  name="price"
                  value={service.price}
                  onChange={(e) => handleServiceChange(e, index)}
                  placeholder="Precio"
                  className="w-full border rounded-lg px-3 py-2 bg-transparent mb-4"
                />
                {index === 0 ? (
                  null
                ) : (
                  <button type="button" className="border border-orange-500 hover:bg-zinc-900 text-white px-6 py-2 rounded-lg mb-2 ml-5" onClick={() => removeService(index)}>
                    Eliminar Servicio
                  </button>
                )}
                {index === services.length - 1 && (
                  <button type="button" className="border hover-bg-zinc-900 text-white px-6 py-2 rounded-lg ml-5" onClick={addService}>
                    Agregar Servicio
                  </button>
                )}
              </div>
            ))}
          </div>


          <div className="mb-4">
            <label htmlFor="barberImages" className="block text-gray-300 mb-4">Imágenes de la Barbería (maximo 4):</label>
            <label className="w-full border rounded-lg ml-4 px-3 py-2 cursor-pointer bg-orange-500 text-white hover:bg-orange-600">
              Subir Imágenes
              <input
                type="file"
                multiple
                accept="image/*"
                id="barberImages"
                onChange={(e) => {
                  const selectedImages = Array.from(e.target.files);
                  const totalImages = [...barberImages, ...selectedImages].slice(0, 4);
                  setBarberImages(totalImages);
                }}
                style={{ display: 'none' }}
              />
            </label>
          </div>

          {barberImages.length > 0 && (
            <div className="mb-4">
              <p>Imágenes seleccionadas:</p>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {barberImages.map((image, index) => (
                    <div key={index}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index + 1}`}
                        className="w-24 h-24"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button onClick={handlePrevStep} className="bg-zinc-800 hover:bg-zinc-900 text-white px-6 py-2 rounded-lg mr-4">Atrás</button>
          <button type="submit" className="bg-zinc-800 hover:bg-zinc-900 text-white px-6 py-2 rounded-lg ml-4">Crear Barbería</button>
        </form>
      )}
      <div className='mt-20'>
        <NavBar />
      </div>

    </section>
  );
}

export default BarberForm;
