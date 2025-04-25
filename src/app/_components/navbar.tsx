'use client'
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu no mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-md ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            id="nameLogo"
            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            Mago Alquimista
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="w-[100px] px-4 py-3 bg-black border border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500/90 hover:text-black transition-all duration-200 ease-in-out"
          >
            Login
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Menu Desktop */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex items-center justify-between w-full md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul
            id="navItens"
            className="flex flex-col font-medium text-sm p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-yellow-500  rounded-sm md:dark:bg-black"
                aria-current="page"
              >
                Ínicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-black dark:hover:text-yellow-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Escola Hermética
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-transparent md:hover:bg-transparent md:hover:text-yellow-600 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-transparent dark:hover:text-yellow-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Loja do Mago
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-transparent md:hover:bg-transparent md:hover:text-yellow-600 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-transparent dark:hover:text-yellow-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Consultas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-transparent md:hover:bg-transparent md:hover:text-yellow-600 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-transparent dark:hover:text-yellow-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
