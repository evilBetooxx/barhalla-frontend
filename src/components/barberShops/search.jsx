import React from 'react';

function Search() {
  return (
    <header className="flex flex-col items-center p-4 text-white">
      <div className="flex flex-col items-center mb-4 sm:mb-0 sm:flex-row sm:justify-center">
        <img src="/barhallaLogo.png" alt="Logo" className="h-32 w-32 mt-[-20px] sm:h-40 sm:w-40 mr-2" />
        <div className="flex flex-col items-center mt-2 sm:flex-row sm:items-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar..."
              className="p-2 border rounded-lg bg-zinc-900"
            />
            <button className="ml-2 bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg">Buscar</button>
          </div>
          <select className="p-2 border rounded-lg mt-2 sm:mt-0 sm:ml-2 text-white bg-zinc-900 lg:w-60 block sm:inline">
            <option value="tuxtla">Tuxtla Gutiérrez</option>
            <option value="comitan">Comitán</option>
            <option value="suchiapa">Suchiapa</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Search;
