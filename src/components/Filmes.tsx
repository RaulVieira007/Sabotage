import { useState } from "react"
import { Play } from "lucide-react"

const filmes = [
  {
    titulo: "Sabotage – O Maestro do Canão",
    ano: "2015",
    poster: "/documentario.jpeg",
    trailer: "https://www.youtube.com/watch?v=VQPXttMCNaI",
    tipo: "Documentário",
  },
  {
    titulo: "Carandiru",
    ano: "2003",
    poster: "/carandiru.jpg",
    trailer: "https://www.youtube.com/watch?v=BdLvrNz9tUk",
    tipo: "Filme",
  },
  {
    titulo: "O Invasor",
    ano: "2001",
    poster: "/O_Invasor.jpg",
    trailer: "https://www.youtube.com/watch?v=KNnt2i1qN68",
    tipo: "Filme",
  },
]

// converte link do YouTube para embed
function toEmbed(url: string) {
  return url.replace("watch?v=", "embed/")
}

export default function Filmes() {
  const [trailerAtivo, setTrailerAtivo] = useState<string | null>(null)

  return (
    <>
      <section
        id="filmes"
        className="py-28 px-4 sm:px-6 bg-black border-t border-red-900"
      >
        {/* TÍTULO */}
        <h2 className="text-4xl sm:text-5xl text-center text-blood mb-16 tracking-wide">
          Filmes & Documentários
        </h2>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-10 xl:gap-12
            max-w-7xl xl:max-w-[1600px]
            mx-auto
          "
        >
          {filmes.map((filme) => (
            <div
              key={filme.titulo}
              onClick={() => setTrailerAtivo(toEmbed(filme.trailer))}
              className="
                group cursor-pointer
                bg-zinc-900 rounded-2xl overflow-hidden
                transition-all duration-500
                hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(185,28,28,0.4)]
              "
            >
              {/* IMAGEM */}
              <div className="relative">
                <img
                  src={filme.poster}
                  alt={filme.titulo}
                  className="
                    w-full
                    h-64 sm:h-80 lg:h-[420px] xl:h-[520px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY / PLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-black/60
                    opacity-100 sm:opacity-0
                    sm:group-hover:opacity-100
                    transition
                    flex items-center justify-center
                  "
                >
                  <div
                    className="
                      w-16 h-16 sm:w-20 sm:h-20
                      rounded-full
                      bg-blood
                      flex items-center justify-center
                      text-black
                      scale-100 sm:scale-75
                      sm:group-hover:scale-100
                      transition
                    "
                  >
                    <Play size={32} fill="black" />
                  </div>
                </div>
              </div>

              {/* TEXTO */}
              <div className="p-6 text-center">
                <h3 className="text-white font-semibold text-lg">
                  {filme.titulo}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {filme.ano} • {filme.tipo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL TRAILER */}
      {trailerAtivo && (
        <div
          className="
            fixed inset-0
            bg-black/90
            z-50
            flex items-center justify-center
            px-4 sm:px-6
          "
        >
          <div className="relative w-full max-w-6xl aspect-video">

            <iframe
              src={trailerAtivo}
              className="w-full h-full rounded-2xl"
              allow="autoplay; fullscreen"
              allowFullScreen
            />

            {/* FECHAR */}
            <button
              onClick={() => setTrailerAtivo(null)}
              className="
                absolute
                -top-12
                right-0
                text-blood
                text-4xl
                hover:scale-110
                transition
              "
            >
              ✕
            </button>

          </div>
        </div>
      )}
    </>
  )
}
