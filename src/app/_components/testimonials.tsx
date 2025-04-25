"use client";

import { useState } from "react";
import FadeInOnce from "@/app/fadeInOnce";

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src: string) => {
    setVideoSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <div className="w-full mx-auto text-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
        <FadeInOnce>
        <figure className="animate-fade-up animate-once animate-duration-1000 animate-delay-200 text-center flex flex-col justify-between min-h-[200px]">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              "Na minha opinião, o Mago Lamon é o melhor que temos hoje no
              Brasil."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Danilo Sena
              </cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Númerologo Cabalista
              </cite>
            </div>
          </figcaption>
          <button
            onClick={() => openModal("/videos/depoimento-1.mp4")}
            className="text-blue-500 mt-4"
          >
            Abrir vídeo
          </button>
        </figure>
        </FadeInOnce>
        <FadeInOnce>
        <figure className="animate-fade-up animate-once animate-duration-1000 animate-delay-200 text-center flex flex-col justify-between min-h-[200px]">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              "Conhecer o Mago Lamon me fez compreender todo aquele conhecimento que eu havia buscado e estava expalhado dentro de mim."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Jhon Doe
              </cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Mentorado do Mago
              </cite>
            </div>
          </figcaption>
          <button
            onClick={() => openModal("/videos/depoimento-2.mp4")}
            className="text-blue-500 mt-4"
          >
            Abrir vídeo
          </button>
        </figure>
        </FadeInOnce>
        <FadeInOnce>
        <figure className="animate-fade-up animate-once animate-duration-1000 animate-delay-200 text-center flex flex-col justify-between min-h-[200px]">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
              "O Mago conseguil juntar todos os caquinhos, todo o mosaico que era a minha mente e conseguil junta-los de uma forma sútil."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Mary Doe
              </cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                Cartomante
              </cite>
            </div>
          </figcaption>
          <button
            onClick={() => openModal("/videos/depoimento-3.mp4")}
            className="text-blue-500 mt-4"
          >
            Abrir vídeo
          </button>
        </figure>
        </FadeInOnce>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black p-8 rounded-lg max-w-3xl w-fit">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
            >
              X
            </button>
            <video
              className="w-auto max-w-full h-auto"
              controls
              style={{ maxHeight: "500px" }}
            >
              <source src={videoSrc} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
