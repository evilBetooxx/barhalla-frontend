import React from 'react';
import Link from 'next/link';

function errorBarber (){
    return(
        <main className="flex flex-col items-center justify-center h-screen">
        <header>
            <img
                src="/barhallaLogo.png" 
                alt="Imagen de Barhalla"
                className="w-60 h-60"
            />
        </header>
        <section>
            <img
                src="/vikingo5.png" 
                alt="Imagen de Vikingo"
                className="mb-6 mt-[-40px] max-w-1/2"
            />
        </section>
        <article className="bg-zinc-900 p-8 rounded-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Ups, ¿Aún no tienes una barberia?</h1>
            <button className="bg-orange-500 hover-bg-orange-700 text-white font-bold py-2 px-4 rounded">
                <Link href='/registerBarber'>
                    Registrar Barberia
                </Link>
            </button>
        </article>
    </main>
    );
}

export default errorBarber;