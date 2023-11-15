"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

function Services() {
    const [activeSection, setActiveSection] = useState('services');
    const [newReview, setNewReview] = useState({ content: '' });
    const [reviews, setReviews] = useState([
        {
            author: "John Doe",
            content: "¡Excelente servicio! Muy contento con mi compra."
        },
        {
            author: "Jane Smith",
            content: "Las reseñas son muy útiles. Lo recomiendo totalmente."
        },
        {
            author: "John Doe",
            content: "¡Excelente servicio! Muy contento con mi compra."
        },
        {
            author: "Jane Smith",
            content: "Las reseñas son muy útiles. Lo recomiendo totalmente."
        },
        {
            author: "John Doe",
            content: "¡Excelente servicio! Muy contento con mi compra."
        },
        {
            author: "Jane Smith",
            content: "Las reseñas son muy útiles. Lo recomiendo totalmente."
        },
    ]);

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
        <p key="direccion">
            <FontAwesomeIcon icon={faMapMarker} /> Dirección: Calle 123, Ciudad
        </p>,
        <p key="telefono">
            <FontAwesomeIcon icon={faPhone} /> Teléfono: (123) 456-7890
        </p>,
        <p key="correo">
            <FontAwesomeIcon icon={faEnvelope} /> Correo: ejemplo@email.com
        </p>,
    ];

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, newReview]);
        setNewReview({ content: '' });
    };

    return (
        <div className="p-8 flex flex-col lg:flex-row space-y-8 lg:space-x-8">
            <div className="flex flex-col items-center relative bg-zinc-950 border border-zinc-800 rounded-lg w-80  mt-8">
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
                        <h2 className="text-orange-500">Servicios - costos</h2>
                        <ul>
                            {servicios.map((servicio, index) => (
                                <li key={index}>
                                    {servicio.nombre} - {servicio.precio}
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
                                <li key={index}>{horarioItem}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {activeSection === 'contact' && (
                    <section>
                        <h2 className="text-orange-500">Contacto</h2>
                        <ul>
                            {contacto.map((contactoItem, index) => (
                                <li key={index}>{contactoItem}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>

            <div className="flex flex-col items-center lg:items-start relative bg-zinc-950 border border-zinc-800 rounded-lg p-4 shadow-md">
                <div className="reviews-container">
                    <h1 className="text-2xl font-semibold mb-4 text-orange-500">Reseñas</h1>
                    <section className="max-h-80 overflow-y-auto">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-zinc-900 rounded-lg p-4 shadow-md mb-4">
                                <h2 className="text-white font-semibold">{review.author}</h2>
                                <p className="text-white mt-2">{review.content}</p>
                            </div>
                        ))}
                    </section>
                </div>
                <form onSubmit={handleReviewSubmit} className="mt-4">
                    <label className="block text-white mb-2">Reseña:</label>
                    <textarea
                        value={newReview.content}
                        onChange={(e) => setNewReview({ content: e.target.value })}
                        className="border rounded-md p-2 mb-2 bg-zinc-900 "
                        required
                    ></textarea>
                    <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md ml-4">Agregar Reseña</button>
                </form>
            </div>
        </div>
    );
}

export default Services;
