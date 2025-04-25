export default function Newsletter() {
  return (
    <section
      className="flex min-h-[200px] items-center justify-center relative w-full before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:backdrop-blur-sm before:backdrop-brightness-50 before:z-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/sky-bg.png')",
      }}
    >
      <div className="relative z-10 flex flex-col gap-10 md:flex-row items-center md:items-center justify-center w-full mx-10">
        {/* Título */}
        <h2 className="text-3xl font-bold text-yellow-500">
          Assine nossa newsletter
        </h2>

        {/* Input + Botão + Checkbox */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center w-full md:w-auto">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full md:w-80 px-4 py-2 border bg-black border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="px-4 py-[9.4px] bg-yellow-500 text-black rounded-r-lg hover:bg-black/80 hover:text-yellow-500"
            >
              Assinar
            </button>
          </div>

          {/* Check box de termos */}
          <div className="mt-2 text-sm text-gray-300">
            <label className="flex items-start">
              <input type="checkbox" className="mr-2 mt-1" />
              <span>
                Eu li e aceito os{" "}
                <a
                  href="/termos-de-servico"
                  className="text-yellow-500 hover:underline"
                >
                  Termos de Serviço
                </a>{" "}
                e a{" "}
                <a
                  href="/politica-de-privacidade"
                  className="text-yellow-500 hover:underline"
                >
                  Política de Privacidade
                </a>
                .
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
