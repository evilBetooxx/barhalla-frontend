"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker, faPencilAlt, faSave } from '@fortawesome/free-solid-svg-icons';

function Services() {
    const [activeSection, setActiveSection] = useState('services');
    const [editMode, setEditMode] = useState(false);
    const [editableData, setEditableData] = useState(null);

    const servicios = [
        { nombre: "Servicio 1", precio: "$20" },
        { nombre: "Servicio 2", precio: "$30" },
        { nombre: "Servicio 3", precio: "$25" },
        { nombre: "Servicio 4", precio: "$40" },
        { nombre: "Servicio 1", precio: "$20" },
        { nombre: "Servicio 2", precio: "$30" },
        { nombre: "Servicio 3", precio: "$25" },
        { nombre: "Servicio 4", precio: "$40" },
    ];

    const horario = ["Lunes: 9 AM - 6 PM", "Sábados: 10 AM - 4 PM"];

    const contacto = [
        { tipo: "Direccion", valor: "Calle 123, Ciudad" },
        { tipo: "Telefono", valor: "(123) 456-7890" },
        { tipo: "Correo", valor: "ejemplo@email.com" },
    ];

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setEditMode(false);
    };

    const handleEditClick = (index) => {
        setEditMode(true);
        setEditableData({ index, data: getEditableData(index) });
    };

    const getEditableData = (index) => {
        switch (activeSection) {
            case 'services':
                return { ...servicios[index] };
            case 'schedule':
                return horario[index];
            case 'contact':
                return { ...contacto[index] };
            default:
                return null;
        }
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    const handleInputChange = (e, field) => {
        setEditableData({
            ...editableData,
            data: {
                ...editableData.data,
                [field]: e.target.value,
            },
        });
    };

    return (
        <div className="p-8 flex flex-col lg:flex-col space-y-8 lg:space-x-8">
            <div className="flex flex-col items-center relative bg-zinc-950 border border-zinc-800 rounded-lg w-80 h-auto mt-8">
                <nav>
                    <ul className="flex space-x-4 mb-2">
                        <li>
                            <button
                                onClick={() => handleSectionChange('services')}
                                className={`hover:text-orange-500 mt-8 border border-zinc-800 p-2 px-2 rounded-lg ${activeSection === 'services' ? 'active' : ''
                                    }`}
                            >
                                Servicios
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSectionChange('schedule')}
                                className={`hover:text-orange-500 mt-8 border border-zinc-800 p-2 px-2 rounded-lg ${activeSection === 'schedule' ? 'active' : ''
                                    }`}
                            >
                                Horario
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleSectionChange('contact')}
                                className={`hover:text-orange-500 mt-8 border border-zinc-800 p-2 px-2 rounded-lg ${activeSection === 'contact' ? 'active' : ''
                                    }`}
                            >
                                Contacto
                            </button>
                        </li>
                    </ul>
                </nav>

                {activeSection === 'services' && (
                    <section>
                        <h2 className="text-orange-500 mb-2 text-center">Servicios y costos</h2>
                        <ul>
                            {servicios.map((servicio, index) => (
                                <li key={index} className="mb-2">
                                    <div className="flex justify-between items-center">
                                        {editMode && editableData.index === index ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    value={editableData.data.nombre}
                                                    className='bg-zinc-900 rounded-lg'
                                                    onChange={(e) => handleInputChange(e, 'nombre')}
                                                />
                                                <input
                                                    type="text"
                                                    value={editableData.data.precio}
                                                    className='bg-zinc-900 rounded-lg mt-1'
                                                    onChange={(e) => handleInputChange(e, 'precio')}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <span className='mr-4'>{servicio.nombre}</span>
                                                <span>{servicio.precio}</span>
                                            </div>
                                        )}
                                        {editMode && editableData.index === index ? (
                                            <button onClick={handleSaveClick}>
                                                <FontAwesomeIcon icon={faSave} style={{ marginLeft: '8px', color: 'green' }} />
                                            </button>
                                        ) : (
                                            <button onClick={() => handleEditClick(index)}>
                                                <FontAwesomeIcon icon={faPencilAlt} style={{ marginLeft: '8px', color: 'orange' }} />
                                            </button>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}



                {activeSection === 'schedule' && (
                    <section>
                        <h2 className="text-orange-500">Horario</h2>
                        <ul>
                            {horario.map((horarioItem, index) => (
                                <li className="mb-2" key={index}>
                                    {editMode && editableData.index === index ? (
                                        <input
                                            type="text"
                                            value={editableData.data}
                                            className='bg-zinc-900 rounded-lg'
                                            onChange={(e) => handleInputChange(e, 'data')}
                                        />
                                    ) : (
                                        horarioItem
                                    )}
                                    {editMode && editableData.index === index && (
                                        <button onClick={handleSaveClick}>
                                            <FontAwesomeIcon icon={faSave} style={{ marginLeft: '8px', color: 'green' }} />
                                        </button>
                                    )}
                                    {!editMode && (
                                        <button onClick={() => handleEditClick(index)}>
                                            <FontAwesomeIcon icon={faPencilAlt} style={{ marginLeft: '8px', color: 'orange' }} />
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {activeSection === 'contact' && (
                    <section>
                        <h2 className="text-orange-500">Contacto</h2>
                        <ul>
                            {contacto.map((contactoItem, index) => (
                                <li className="mb-2" key={index}>
                                    {editMode && editableData.index === index ? (
                                        <div>
                                            <input
                                                type="text"
                                                value={editableData.data.valor}
                                                className='bg-zinc-900 rounded-lg'
                                                onChange={(e) => handleInputChange(e, 'valor')}
                                            />
                                            <button onClick={handleSaveClick}>
                                                <FontAwesomeIcon icon={faSave} style={{ marginLeft: '8px', color: 'green' }} />
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>
                                                {contactoItem.tipo}: {contactoItem.valor}
                                            </p>
                                            <button onClick={() => handleEditClick(index)}>
                                                <FontAwesomeIcon icon={faPencilAlt} style={{ marginLeft: '8px', color: 'orange' }} />
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </div>
    );
}

export default Services;
