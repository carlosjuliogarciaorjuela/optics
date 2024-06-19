"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [loginClicked, setLoginClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const handleLoginClick = () => {
    setLoginClicked(true);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Alterna el estado del menú
  };

  return (
    <header>
      <nav className="bg-navyblue border-gray-200 px-4 lg:px-0 py-0 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center lg:order-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/LogoVector.svg"
                className="h-6 sm:h-8"
                alt="LogoVision"
                width={100}
                height={100}
              />
              <span className="hidden sm:block lg:block self-center text-sm sm:text-sm md:text-md lg:text-lg font-semibold whitespace-nowrap text-white lg:mr-2">
                Megacentro Internacional de la Visión
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center lg:order-3">
            <Link
              href="#"
              onClick={handleLoginClick}
              className={`text-white dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 ${
                loginClicked ? "bg-primary-800" : "bg-primary-700"
              }`}
            >
              Log in
            </Link>
            <Link
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Get started
            </Link>
            <button
              onClick={handleMenuToggle} // Maneja el clic para alternar el menú
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={menuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-2`}
            id="mobile-menu-2"
          >
            <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-3 lg:mt-0">
              <div>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Compañia
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Tienda Virtual
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Equipo
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
