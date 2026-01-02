import { useMusic } from "../context/MusicContext"

type Props = {
  album: any
  onClose: () => void
}

export default function AlbumModal({ album, onClose }: Props) {
  const { playAlbum } = useMusic()

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
      
      <div
        className="
          bg-zinc-900
          w-full
          max-w-3xl
          max-h-[90vh]
          rounded-2xl
          p-5 sm:p-6
          relative
          overflow-y-auto
        "
      >
        {/* FECHAR */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            text-gray-400 hover:text-white
            text-2xl
          "
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6 items-center sm:items-start text-center sm:text-left">
          
          <img
            src={album.capa}
            alt={album.titulo}
            className="
              w-40 h-40
              sm:w-48 sm:h-48
              object-cover
              rounded-xl
              shadow-lg
            "
          />

          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              Álbum
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              {album.titulo}
            </h2>

            <p className="text-gray-400 mt-2">{album.ano}</p>
          </div>
        </div>

        {/* FAIXAS */}
        <div className="space-y-2">
          {album.faixas.map((faixa: any, index: number) => (
            <div
              key={index}
              onClick={() => playAlbum(album, index)}
              className="
                flex items-center justify-between
                p-4
                rounded-lg
                hover:bg-zinc-800
                cursor-pointer
                transition
              "
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">
                  {index + 1}
                </span>

                <span className="text-white text-sm sm:text-base">
                  {faixa.titulo}
                </span>
              </div>

              <span className="text-gray-400 text-lg">▶</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
