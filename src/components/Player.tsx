import { useMusic } from "../context/MusicContext"
import { Play, Pause, SkipBack, SkipForward, X } from "lucide-react"

export default function Player() {
  const {
    albumAtual,
    faixaIndex,
    tocando,
    progresso,
    togglePlay,
    stop,
    next,
    prev
  } = useMusic()

  if (!albumAtual) return null

  const faixa = albumAtual.faixas[faixaIndex]

  return (
    <div
      className="
        fixed bottom-0 left-0 w-full z-50
        bg-black border-t border-neutral-800 text-white
      "
    >
      {/* PROGRESS BAR */}
      <div className="h-1 bg-neutral-800">
        <div
          className="h-1 bg-red-600 transition-all"
          style={{ width: `${progresso}%` }}
        />
      </div>

      <div
        className="
          px-4 py-4
          flex flex-col gap-4
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* INFO */}
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <img
            src={albumAtual.capa}
            alt={albumAtual.titulo}
            className="w-12 h-12 md:w-14 md:h-14 object-cover rounded"
          />

          <div className="text-center md:text-left max-w-[220px]">
            <p className="font-semibold text-sm truncate">
              {faixa.titulo}
            </p>
            <p className="text-xs text-neutral-400 truncate">
              {albumAtual.titulo}
            </p>
          </div>
        </div>

        {/* CONTROLES */}
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={prev}
            className="hover:text-red-500 transition"
          >
            <SkipBack size={28} />
          </button>

          <button
            onClick={togglePlay}
            className="
              bg-red-600 p-4 rounded-full
              hover:scale-110 transition-transform
            "
          >
            {tocando ? <Pause size={26} /> : <Play size={26} />}
          </button>

          <button
            onClick={next}
            className="hover:text-red-500 transition"
          >
            <SkipForward size={28} />
          </button>
        </div>

        {/* CLOSE */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={stop}
            className="
              text-red-500 hover:text-red-400
              transition
            "
          >
            <X size={26} />
          </button>
        </div>
      </div>
    </div>
  )
}
