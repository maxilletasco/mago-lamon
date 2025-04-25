// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/images/tarot-bg.png')", // coloque sua imagem em public/images/
      }}
    >
      {/* Overlay escuro pra deixar o texto legível */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-2xl mx-auto text-white">
        <h1 className="animate-fade animate-once animate-duration-[3000ms] text-4xl md:text-6xl font-serif font-bold text-yellow-500 drop-shadow-lg">
          Quando o discípulo está pronto, o mestre aparece
        </h1>
        <p className="animate-fade animate-once animate-duration-[3000ms] animate-delay-200 mt-6 text-lg md:text-xl text-gray-200">
          Tudo o que você precisa para se tornar um mestre da magia você
          encontra aqui : Alta Magia, Cabala, Astrologia, Filosofia da Magia e
          Numerologia.
        </p>
        <button
          type="button"
          className="mt-8 px-8 py-3 bg-black border border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500/70 transition hover:text-black"
        >
          Iniciar Jornada
        </button>
      </div>
    </section>
  );
}
