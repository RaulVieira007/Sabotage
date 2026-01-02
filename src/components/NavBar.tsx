import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { id: "historia", label: "História" },
    { id: "albuns", label: "Álbuns" },
    { id: "filmes", label: "Filmes" },
    { id: "produtos", label: "Produtos" },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-red-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <h1 className="text-xl font-bold text-blood tracking-wide">
            Eterno Sabotage
          </h1>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-6 text-sm uppercase tracking-widest text-white">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-blood transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-blood"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur flex flex-col items-center justify-center">
          
          {/* FECHAR */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-blood"
            aria-label="Fechar menu"
          >
            <X size={32} />
          </button>

          <ul className="flex flex-col gap-10 text-2xl uppercase tracking-widest text-white text-center">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-blood transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
