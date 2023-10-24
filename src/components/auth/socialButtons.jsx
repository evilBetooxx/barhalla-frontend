import { FaFacebook, FaGoogle, FaApple, FaTimes } from "react-icons/fa";

function SocialButtons() {
  return (
    <ul className="flex flex-col items-center">
      <li className="my-2">
        <h2 className="text-lg text-center">Entra con:</h2>
      </li>
      <li className="my-2">
        <button className="bg-sky-900 hover:bg-sky-950 text-white font-bold text-sm py-2 px-4 rounded w-[325px] mt-2 flex justify-center items-center">
          <FaFacebook className="mr-2" />
          Facebook
        </button>
      </li>
      <li className="my-2">
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold text-sm py-2 px-4 rounded w-[325px] flex justify-center items-center">
          <FaGoogle className="mr-2" />
          Google
        </button>
      </li>
      <li className="my-2">
        <button className="bg-zinc-800 hover:bg-zinc-900 text-white font-bold text-sm py-2 px-4 rounded w-[325px] flex justify-center items-center">
          <FaApple className="mr-2" />
          Apple ID
        </button>
      </li>
      <li className="my-2">
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold text-sm py-2 px-4 rounded w-[325px] flex justify-center items-center">
          <FaTimes className="mr-2" />
          X
        </button>
      </li>
      
    </ul>
  );
}

export default SocialButtons;
