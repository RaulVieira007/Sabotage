import { useState } from "react"
import Albuns from "./components/Albuns"
import Filmes from "./components/Filmes"
import Hero from "./components/Hero"
import Historia from "./components/Historia"
import Legado from "./components/Legado"
import Navbar from "./components/NavBar"
import NowPlaying from "./components/NowPlaying"
import Player from "./components/Player"
import LoadingScreen from "./components/LoadingScreen"

function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Historia />
      <Albuns />
      <NowPlaying />
      <Filmes />
      <Legado />
      <Player />
    </>
  )
}

export default App
