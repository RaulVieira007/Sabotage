type Props = {
  topico: {
    titulo: string
    texto: string[]
    imagem: string
  }
  onClose: () => void
}

export default function HistoriaModal({ topico, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center px-4 sm:px-6">
      
      {/* CONTAINER */}
      <div
        className="
          w-full max-w-5xl
          bg-black/60 backdrop-blur-md
          rounded-xl
          overflow-hidden
          max-h-[90vh]
          grid grid-cols-1 md:grid-cols-2
        "
      >

        {/* IMAGEM (mobile em cima | desktop direita) */}
        <div className="relative h-64 sm:h-80 md:h-auto md:order-2">
          <img
            src={topico.imagem}
            alt={topico.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* TEXTO */}
        <div className="p-6 sm:p-10 overflow-y-auto">

          <h2
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-street
              text-blood
              tracking-widest
              mb-6
              text-center md:text-left
            "
          >
            {topico.titulo}
          </h2>

          <div className="space-y-6 mb-10">
            {topico.texto.map((paragrafo, index) => (
              <p
                key={index}
                className="
                  text-gray-200
                  text-base sm:text-lg
                  leading-relaxed
                  text-center md:text-left
                "
              >
                {paragrafo}
              </p>
            ))}
          </div>

          {/* BOTÃO FECHAR */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={onClose}
              className="
                text-blood
                border border-blood
                px-6 py-2
                tracking-widest
                hover:bg-blood hover:text-black
                transition-all
                shadow-[0_0_15px_rgba(180,0,0,0.6)]
              "
            >
              FECHAR
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
