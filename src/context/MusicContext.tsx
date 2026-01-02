import {
  createContext,
  type ReactNode,
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback
} from "react"

/* ===== TIPOS ===== */

export type Faixa = {
  titulo: string
  audio: string
}

export type Album = {
  titulo: string
  capa: string
  faixas: Faixa[]
}

type MusicContextType = {
  albumAtual: Album | null
  faixaIndex: number
  tocando: boolean
  progresso: number
  duracao: number
  playAlbum: (album: Album, index?: number) => void
  togglePlay: () => void
  stop: () => void
  next: () => void
  prev: () => void
}

/* ===== CONTEXTO ===== */

const MusicContext = createContext<MusicContextType | null>(null)

/* ===== PROVIDER ===== */

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef(new Audio())

  const [albumAtual, setAlbumAtual] = useState<Album | null>(null)
  const [faixaIndex, setFaixaIndex] = useState(0)
  const [tocando, setTocando] = useState(false)
  const [progresso, setProgresso] = useState(0)
  const [duracao, setDuracao] = useState(0)

  const playAlbum = useCallback((album: Album, index = 0) => {
    const audio = audioRef.current

    setAlbumAtual(album)
    setFaixaIndex(index)

    audio.src = album.faixas[index].audio
    audio.play()
    setTocando(true)
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!albumAtual) return

    if (tocando) {
      audio.pause()
      setTocando(false)
    } else {
      audio.play()
      setTocando(true)
    }
  }, [albumAtual, tocando])

  const stop = useCallback(() => {
    const audio = audioRef.current
    audio.pause()
    audio.currentTime = 0
    setTocando(false)
    setProgresso(0)
    setAlbumAtual(null)
  }, [])

  const next = useCallback(() => {
    if (!albumAtual) return

    const novoIndex =
      faixaIndex + 1 >= albumAtual.faixas.length ? 0 : faixaIndex + 1

    setFaixaIndex(novoIndex)

    const audio = audioRef.current
    audio.src = albumAtual.faixas[novoIndex].audio
    audio.play()
    setTocando(true)
  }, [albumAtual, faixaIndex])

  const prev = useCallback(() => {
    if (!albumAtual) return

    const novoIndex =
      faixaIndex - 1 < 0
        ? albumAtual.faixas.length - 1
        : faixaIndex - 1

    setFaixaIndex(novoIndex)

    const audio = audioRef.current
    audio.src = albumAtual.faixas[novoIndex].audio
    audio.play()
    setTocando(true)
  }, [albumAtual, faixaIndex])

  /* ===== PROGRESSO ===== */
  useEffect(() => {
    const audio = audioRef.current

    const updateProgress = () => {
      const percent =
        (audio.currentTime / audio.duration) * 100 || 0
      setProgresso(percent)
      setDuracao(audio.duration || 0)
    }

    audio.addEventListener("timeupdate", updateProgress)
    audio.addEventListener("ended", next)

    return () => {
      audio.removeEventListener("timeupdate", updateProgress)
      audio.removeEventListener("ended", next)
    }
  }, [next])

  return (
    <MusicContext.Provider
      value={{
        albumAtual,
        faixaIndex,
        tocando,
        progresso,
        duracao,
        playAlbum,
        togglePlay,
        stop,
        next,
        prev
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}

/* ===== HOOK ===== */

export function useMusic() {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error("useMusic deve ser usado dentro de MusicProvider")
  }
  return context
}
