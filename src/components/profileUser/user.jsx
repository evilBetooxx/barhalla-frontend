
function User() {
  return (
    <section className="flex flex-col items-center mr-6 ml-6 relative">
      <header className="sm:mb-4">
        <img
          src="/barhallaLogo.png"
          alt="Logo de la aplicación"
          className="w-32 h-32 mt-4 sm:w-48 sm:h-48"
        />
      </header>
      <div className="absolute top-6 left-0 sm:left-1/4 w-full sm:w-1/2 h-1 bg-orange-500"></div>
      <article className="bg-zinc-800 p-4 rounded-md shadow-md flex mt-2 relative">
        <aside className="mr-4">
          <img
            src="/y.jpeg"
            alt="Foto del usuario"
            className="w-24 h-24 sm:w-36 sm:h-36 rounded-lg"
          />
        </aside>
        <div>
          <h1 className="text-lg font-semibold">Kanye Ojendis</h1>
          <p className="text-gray-500">
            Fecha de registro: 25 de octubre de 2023
          </p>
        </div>
      </article>
      <div className="absolute bottom-[-20px] left-0 sm:left-1/4 w-full sm:w-1/2 h-1 bg-orange-500"></div>
      <div className="mt-4 text-center sm:text-left flex items-center sm:items-start">
        <p className="text-gray-500" style={{ marginRight: "10px" }}>
          Reseñas: 5
        </p>
        <p className="text-gray-500" style={{ marginRight: "10px" }}>
          Likes: 100
        </p>
        <p className="text-gray-500" style={{ marginRight: "10px" }}>
          Citas: 2
        </p>
      </div>
    </section>
  );
}

export default User;
