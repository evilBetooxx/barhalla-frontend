"use client";
import React, { useState, useRef } from 'react';

function EditBarberShop() {
    const BarberData = {
        name: "Barberia de prueba",
        description: "Esta es una barbería de prueba",
        logo: "/barber3.jpeg"
    };

    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                setSelectedFile(fileReader.result);
            };
            fileReader.readAsDataURL(file);
        } else {
            setSelectedFile(null);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex items-center">
                <img
                    src="/barhallaLogo.png"
                    alt="Logo de la barbería"
                    className="h-32 w-32 object-contain"
                />
            </div>

            <hr className="w-full mt-4 sm:mt-12 border-t-2 border-orange-500" />

            <h1 className="text-2xl text-orange-500 font-semibold my-4">
                {BarberData.name}
            </h1>

            <div className="flex flex-col items-center">
                {!selectedFile && (
                    <img
                        src={BarberData.logo}
                        alt="Imagen de la barbería"
                        className="h-48 w-48 object-contain mb-4"
                    />
                )}

               
                {selectedFile && (
                    <img
                        src={selectedFile}
                        alt="Imagen seleccionada"
                        className="h-48 w-48 object-contain mb-4"
                    />
                )}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />

                <button
                    onClick={() => fileInputRef.current.click()}
                    className="bg-zinc-800 hover:bg-zinc-900 text-white px-4 py-2 rounded-md"
                >
                    Editar Imagen
                </button>
            </div>

            <hr className="w-full mt-4 sm:mt-12 border-t-2 border-orange-500" />
        </div>
    );
}

export default EditBarberShop;
