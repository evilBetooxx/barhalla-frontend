import React from 'react';
import Navbar from '@/components/common/NavBar';
import Link from 'next/link';

function Reviews() {
  const reviewsList = [
    {
      id: 1,
      author: "John Doe",
      content: "¡Excelente servicio! Muy contento con mi compra.",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Las reseñas son muy útiles. Lo recomiendo totalmente.",
    },
    {
      id: 3,
      author: "John Doe",
      content: "¡Excelente servicio! Muy contento con mi compra.",
    },
    {
      id: 4,
      author: "Jane Smith",
      content: "Las reseñas son muy útiles. Lo recomiendo totalmente.",
    },
  ];

  return (
    <div className="min-h-screen">
      <article className="p-4 mx-auto max-w-md mt-6">
        <h1 className="text-2xl font-semibold mb-4 text-center text-orange-500">Reseñas</h1>

        <section className="max-h-60 sm:max-h-96 overflow-y-auto">
          {reviewsList.map((review) => (
            <div key={review.id} className="bg-zinc-900 rounded-lg p-4 shadow-md mb-4">
              <h2 className="text-white font-semibold">{review.author}</h2>
              <p className="text-white mt-2">{review.content}</p>
            </div>
          ))}
        </section>
        <div className="mt-4 flex flex-col space-y-2 items-center">
          <Link href='/editProfile'>
            <button className="border text-white w-80 h-12 rounded-lg  hover:border-black hover:text-black hover:bg-white">Editar Perfil</button>
          </Link>

          <Link href='/appointment'>
            <button className="border text-white w-80 h-12 rounded-lg  hover:border-black hover:text-black hover:bg-white">Historial de Citas</button>
          </Link>

          <Link href="/registerBarber">
            <button className="border text-white w-80 h-12 rounded-lg hover:border-black hover:text-black hover:bg-white">¿Tienes una barbería?</button>
          </Link>
        </div>
      </article>
      <Navbar />
    </div>
  );
}

export default Reviews;
