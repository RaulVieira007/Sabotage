import { BookOpen, Footprints, Shirt } from "lucide-react"

const impactos = [
  {
    titulo:
      "Um Bom Lugar: Biografia Oficial de Mauro Mateus dos Santos – Sabotage",
    descricao: "Livro biográfico",
    icon: <BookOpen size={26} />,
    link: "https://www.amazon.com.br/Sabotage-Um-Bom-Lugar-Toni/dp/8566892003",
  },
  {
    titulo: "Cultura Street – Qix Sabotage",
    descricao: "Moda & identidade",
    icon: <Footprints size={26} />,
    link: "https://qixskateshop.com.br/products/tenis-qix-revolution-sabotage-brooklin",
  },
  {
    titulo: "Camiseta Sabotage – Renner",
    descricao: "Streetwear oficial",
    icon: <Shirt size={26} />,
    link: "https://www.lojasrenner.com.br/p/camiseta-boxy-em-algodao-com-estampa-sabotage/-/A-929437092-br.lr?sku=929437105",
  },
]

export default function ImpactoCultural() {
  return (
    <section
      id="produtos"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-black border-t border-red-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="
              text-3xl sm:text-5xl
              font-extrabold
              text-blood
              tracking-wide
              drop-shadow-[0_0_12px_rgba(180,0,0,0.6)]
            "
          >
            Produtos
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {impactos.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-zinc-950 border border-zinc-800
                rounded-2xl
                p-6 sm:p-10
                flex flex-col items-center text-center
                hover:border-blood
                hover:-translate-y-2
                transition-all duration-500
              "
            >
              {/* ÍCONE */}
              <div
                className="
                  w-16 h-16 sm:w-20 sm:h-20
                  rounded-full bg-blood text-black
                  flex items-center justify-center
                  mb-6 sm:mb-8
                  scale-90 group-hover:scale-100 transition
                  shadow-[0_0_20px_rgba(180,0,0,0.7)]
                "
              >
                {item.icon}
              </div>

              {/* TEXTO */}
              <h3
                className="
                  text-white
                  font-bold
                  text-base sm:text-lg
                  mb-2 sm:mb-3
                  leading-snug
                "
              >
                {item.titulo}
              </h3>

              <p
                className="
                  text-gray-400
                  text-xs sm:text-sm
                  uppercase
                  tracking-wider
                "
              >
                {item.descricao}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
