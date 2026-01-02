import { useMusic } from "../context/MusicContext"

export default function NowPlaying() {
  const { albumAtual, faixaIndex, tocando, togglePlay, next, prev } = useMusic()

  if (!albumAtual) return null

  const faixa = albumAtual.faixas[faixaIndex]

  return (
    <section
      className="
        fixed bottom-0 left-0 w-full z-40
        bg-zinc-950 border-t border-blood
        py-4
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          flex flex-col gap-4
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* INFO */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <img
            src={albumAtual.capa}
            alt={albumAtual.titulo}
            className="w-12 h-12 md:w-14 md:h-14 rounded"
          />

          <div className="text-center md:text-left max-w-[220px]">
            <p className="text-white font-bold text-sm md:text-base truncate">
              {faixa.titulo}
            </p>
            <p className="text-gray-400 text-xs md:text-sm truncate">
              {albumAtual.titulo}
            </p>
          </div>
        </div>

        {/* CONTROLES */}
        <div className="flex items-center justify-center gap-8 text-white text-3xl md:text-2xl">
          <button
            onClick={prev}
            className="hover:text-blood transition"
          >
            ⏮
          </button>

          <button
            onClick={togglePlay}
            className="
              text-blood
              scale-110 hover:scale-125
              transition-transform
            "
          >
            {tocando ? "⏸" : "▶"}
          </button>

          <button
            onClick={next}
            className="hover:text-blood transition"
          >
            ⏭
          </button>
        </div>
      </div>
    </section>
  )
}
