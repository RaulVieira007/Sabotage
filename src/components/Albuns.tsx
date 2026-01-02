import { useState } from "react"
import AlbumModal from "./AlbumModal"
import type { Album } from "../context/MusicContext"
import { Play } from "lucide-react"

const albuns: Album[] = [
  {
    titulo: "Rap é Compromisso!",
    capa: "/Rap_é_Compromisso.jpg",
    faixas: [
      { titulo: "Rap é Compromisso", audio: "/musicas/Rap é Compromisso.mp3" },
      { titulo: "Um Bom Lugar", audio: "/musicas/Um bom lugar.mp3" },
      { titulo: "No Brooklin", audio: "/musicas/No Brooklin.mp3" },
    ],
  },
  {
    titulo: "Sabotage",
    capa: "/sabotagem.jpg",
    faixas: [
      { titulo: "Canão Foi Tão Bom", audio: "/musicas/Canão Foi Tão Bom.mp3" },
      { titulo: "Mosquito", audio: "/musicas/Mosquito.mp3" },
      { titulo: "Superar", audio: "/musicas/Superar.mp3" },
    ],
  },
  {
    titulo: "Uma Luz que Nunca Irá se Apagar",
    capa: "/sabotagem2.jpg",
    faixas: [
      { titulo: "Mun'Ra", audio: "/musicas/Mun'Ra.mp3" },
      { titulo: "Dama Tereza", audio: "/musicas/Dama tereza.mp3" },
      { titulo: "Dorobo", audio: "/musicas/Dorobo.mp3" },
    ],
  },
]

export default function Albuns() {
  const [albumSelecionado, setAlbumSelecionado] = useState<Album | null>(null)

  return (
    <>
      <section
        id="albuns"
        className="scroll-mt-24 py-24 px-4 sm:px-6 bg-black"
      >
        <h2 className="text-3xl sm:text-4xl text-center text-blood mb-12">
          Álbuns
        </h2>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-6 sm:gap-8
          max-w-6xl
          mx-auto
        ">
          {albuns.map((album) => (
            <div
              key={album.titulo}
              onClick={() => setAlbumSelecionado(album)}
              className="
                group cursor-pointer
                bg-zinc-900 rounded-2xl overflow-hidden
                transition transform
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* IMAGEM */}
              <div className="relative">
                <img
                  src={album.capa}
                  alt={album.titulo}
                  className="
                    w-full
                    h-52 sm:h-64
                    object-cover
                  "
                />

                {/* OVERLAY DESKTOP */}
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
                      w-14 h-14 sm:w-16 sm:h-16
                      rounded-full
                      bg-blood
                      flex items-center justify-center
                      text-black
                      scale-100 sm:scale-75
                      sm:group-hover:scale-100
                      transition
                    "
                  >
                    <Play size={26} fill="black" />
                  </div>
                </div>
              </div>

              {/* TÍTULO */}
              <div className="
                p-4 sm:p-5
                text-center
                text-white
                font-semibold
                text-sm sm:text-base
              ">
                {album.titulo}
              </div>
            </div>
          ))}
        </div>
      </section>

      {albumSelecionado && (
        <AlbumModal
          album={albumSelecionado}
          onClose={() => setAlbumSelecionado(null)}
        />
      )}
    </>
  )
}
