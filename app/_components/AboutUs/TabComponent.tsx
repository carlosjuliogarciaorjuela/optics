"use client";

import React from "react";

const TabComponent = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div
        className="text-sm font-medium text-center text-white divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
        id="fullWidthTab"
        role="tablist"
      >
        <div className="w-full p-4 bg-navyblue dark:bg-navyblue text-lg font-bold">
          Sobre Megacentro Internacional de la Visión
        </div>
      </div>
      <div
        id="fullWidthTabContent"
        className="border-t border-gray-200 dark:border-gray-600"
      >
        <div
          className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="vision"
          role="tabpanel"
        >
          <dl className="grid max-w-screen-xl grid-cols-2 gap-3 p-2 mx-auto text-black sm:grid-cols-3 xl:grid-cols-6 xl:h-80  dark:text-white sm:p-8">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">10+</dt>
              <dd className="text-black dark:text-gray-400">Especialistas</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">100+</dt>
              <dd className="text-black dark:text-gray-400">
                Productos disponibles
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">50</dt>
              <dd className="text-black dark:text-gray-400">
                Servicios ofrecidos
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
              <dd className="text-black dark:text-gray-400">
                Clientes satisfechos
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">90+</dt>
              <dd className="text-black dark:text-gray-400">
                Nuevas tendencias
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">Regionales</dt>
              <dd className="text-black dark:text-gray-400">
                Alianzas estratégicas
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
