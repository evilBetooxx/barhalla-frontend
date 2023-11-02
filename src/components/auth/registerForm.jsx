
function registerForm (){
  return(
    <div className="flex items-center justify-center ">
    <div className=" p-8 rounded-lg shadow-lg bg-zinc-900 mt-6">
      <div className="mb-4 text-center">
        <img src="/barhallaLogo.png" alt="Barhalla Logo" className="mx-auto h-32 h32" />
      </div>
      <form>
      <div className="mb-4">
          <label htmlFor="first_name" className="block text-white text-sm font-bold mb-2">
            Nombre:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="w-full border border-gray-300 p-2 rounded bg-black text-white"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-white text-sm font-bold mb-2">
            Apellido:
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="w-full border border-gray-300 p-2 rounded bg-black text-white"
            placeholder="Tu apellido"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
            Correo:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded bg-black"
            placeholder="Barhhaala@algo.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded bg-black"
            placeholder="********* "
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
          Crear cuenta
        </button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-orange-500">¿Ya tienes una cuenta?</span>
        <a href="/login" className="text-orange-500 font-bold"> Inicia sesion</a>
      </div>
    </div>
  </div>
  )
}
export default registerForm;