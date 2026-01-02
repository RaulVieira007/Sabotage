type Topico = {
  titulo: string
  texto: string[]
  imagem: string
}

export default function HistoriaModal({
  topico,
  onClose,
}: {
  topico: Topico
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95">
      
      {/* CONTAINER COM SCROLL */}
      <div className="h-full w-full overflow-y-auto px-4 py-6">

        {/* FECHAR */}
        <button
          onClick={onClose}
          className="text-blood text-sm mb-6"
        >
          Fechar ✕
        </button>

        {/* IMAGEM */}
        <img
          src={topico.imagem}
          alt={topico.titulo}
          className="w-full rounded-lg mb-6"
        />

        {/* TÍTULO */}
        <h2 className="text-blood text-3xl text-center mb-6">
          {topico.titulo}
        </h2>

        {/* TEXTO */}
        <div className="space-y-4 text-gray-300 text-justify leading-relaxed pb-32">
          {topico.texto.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>

      </div>
    </div>
  )
}
