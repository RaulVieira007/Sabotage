import { useEffect } from "react"

type Props = {
  onFinish: () => void
}

export default function LoadingScreen({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 6000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div
      onClick={onFinish}
      className="
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-zinc-800
        cursor-pointer
        px-6
      "
    >
      {/* IMAGEM */}
      <img
        src="/Inicio.png"
        alt="Sabotage"
        className="
          w-48 sm:w-64 md:w-80 lg:w-96
          animate-pulse
          mb-10 sm:mb-12
          select-none
        "
      />

      {/* TEXTO PRINCIPAL */}
      <h1
        className="
          text-blood
          text-lg sm:text-xl md:text-2xl lg:text-3xl
          font-street uppercase
          tracking-[0.25em] sm:tracking-[0.35em] md:tracking-[0.4em]
          neon-text
          text-center
          mb-2 sm:mb-3
          leading-tight
        "
      >
        Rap é compromisso
      </h1>

      {/* TEXTO SECUNDÁRIO */}
      <p
        className="
          text-gray-300
          text-[10px] sm:text-xs md:text-sm
          tracking-[0.2em] sm:tracking-[0.3em]
          uppercase
          neon-soft
          text-center
        "
      >
        não é viagem
      </p>
    </div>
  )
}
