export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">

      {/* GIF DE FUNDO */}
      <img
        src="/sabota.gif"
        alt="Sabotage"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTEÚDO */}
      <div
        className="
          relative z-10
          h-full w-full
          flex flex-col
          items-center justify-end
          text-center
          px-6 sm:px-10
          pb-24 sm:pb-32 md:pb-40
        "
      >
        {/* FRASE */}
        <p
          className="
            text-base sm:text-lg md:text-xl
            text-gray-300
            max-w-xl sm:max-w-2xl md:max-w-3xl
            leading-relaxed
          "
        >
          Um maestro do Canão. Voz da periferia, consciência do rap nacional.
        </p>

        {/* BOTÃO */}
        <a
          href="#historia"
          className="
            mt-8
            inline-block
            px-8 sm:px-10
            py-3 sm:py-4
            text-base sm:text-lg
            font-semibold
            border-2 border-blood
            text-blood
            hover:bg-blood hover:text-black
            transition-all duration-300
            shadow-[0_0_15px_rgba(180,0,0,0.7)]
            hover:shadow-[0_0_30px_rgba(180,0,0,1)]
          "
        >
          Conhecer a história
        </a>
      </div>

    </section>
  )
}
