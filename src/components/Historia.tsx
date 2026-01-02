import { useState } from "react"
import HistoriaModal from "./HistoriaModal"

type Topico = {
  titulo: string
  texto: string[]
  imagem: string
}

<section id="historia">...</section>
const topicos: Topico[] = [
  {
    titulo: "Início",
    texto: [
      "Mauro Mateus dos Santos, conhecido artisticamente como Sabotage, nasceu em 3 de abril de 1973, na cidade de São Paulo. Criado na zona sul da capital, mais especificamente na favela do Canão, sua infância foi marcada por dificuldades, perdas e pela realidade dura da periferia.",

      "Filho de Dona Maria e Seu Mauro, Sabotage perdeu a mãe ainda muito cedo, o que impactou profundamente sua vida. Sem muitas referências e oportunidades, acabou se envolvendo com o crime durante a juventude, vivendo intensamente os riscos e conflitos das ruas.",

      "Foi nesse contexto que o hip-hop surgiu como uma possibilidade de mudança. A música apareceu como forma de expressão e desabafo, transformando vivências reais em letras sinceras e conscientes."
    ],
    imagem: "/historia/inicio.jpg",
  },
  {
    titulo: "O encontro com o rap",
    texto: [
      "O rap entrou na vida de Sabotage como uma voz das ruas. Influenciado pelo hip-hop que crescia nas periferias de São Paulo nos anos 90, ele começou a se identificar com letras que falavam de realidade, resistência e consciência social.",

      "Aos poucos, Sabotage passou de ouvinte a MC, usando a música como forma de se expressar e de se afastar do caminho do crime. Suas letras carregavam verdade, experiências reais e uma visão crua da vida na quebrada, o que fez com que seu nome começasse a ganhar respeito dentro da cena underground.",

      "Mais do que música, o rap se tornou uma ferramenta de transformação pessoal. Foi nesse período que Sabotage encontrou propósito, identidade e a base do estilo que mais tarde o tornaria um dos maiores nomes do rap nacional."
    ],
    imagem: "/historia/Encontro.jpg",
  },
  {
    titulo: "Ascensão e reconhecimento",
    texto: [
      "Com talento e autenticidade, Sabotage começou a ganhar destaque na cena do rap nacional. Sua voz firme, suas rimas diretas e a forma verdadeira de contar histórias da periferia chamaram a atenção de outros artistas e produtores.",

      "No fim dos anos 1990, passou a participar de projetos importantes do rap brasileiro, colaborando com nomes influentes da cena. Seu estilo único misturava crítica social, vivência de rua e consciência, sem perder a humildade e o respeito pelas origens.",

      "O reconhecimento maior veio quando Sabotage deixou de ser apenas um nome do underground e passou a ser visto como uma referência do rap nacional, representando a quebrada com orgulho e verdade. Sua caminhada mostrava que era possível transformar dor em arte e realidade em mensagem."
    ],
    imagem: "/historia/reconhecimento.jpg",
  },

  {
    titulo: "Carreira no cinema",
    texto: [
      "A presença de Sabotage no cinema foi uma extensão natural de sua arte. Sua postura, vivência real e forma de se expressar chamaram a atenção do audiovisual, principalmente em produções que retratavam a periferia e a realidade urbana.",

      "Em 2001, Sabotage participou do filme “O Invasor”, dirigido por Beto Brant. No longa, além de atuar, ele também contribuiu para a trilha sonora, reforçando o clima cru e realista do filme. Sua participação foi muito elogiada justamente por trazer autenticidade às cenas, sem interpretação forçada. Era a realidade falando por si.",

      "Já em 2003, Sabotage participou do filme “Carandiru”, dirigido por Hector Babenco. No filme, ele aparece interpretando a si mesmo, reforçando a ligação direta entre sua história de vida e o contexto retratado na obra. Mesmo com uma participação breve, sua presença teve grande impacto simbólico."
    ],
    imagem: "/historia/Cinema2.jpg",
  },

  {
    titulo: "O fim",
    texto: [
      "No dia 24 de janeiro de 2003, Sabotage foi assassinado em São Paulo, aos 29 anos de idade. Ele foi vítima de um ataque a tiros na zona sul da cidade, região onde cresceu e construiu sua história.",

      "Sua morte causou uma grande comoção na cena do rap nacional e na cultura hip-hop como um todo. Artistas, fãs e amigos lamentaram a perda precoce de um talento que ainda tinha muito a oferecer.",

      "Mesmo partindo cedo, Sabotage deixou um legado eterno. Suas músicas continuam vivas, suas mensagens seguem atuais e sua história permanece como símbolo de resistência, transformação e compromisso com a verdade. O “Maestro do Canão” se foi fisicamente, mas sua voz segue ecoando nas ruas, nos fones de ouvido e na memória do rap brasileiro."
    ],
    imagem: "/historia/fim1.jpg",
  },
]

export default function Historia() {
  const [topicoAtivo, setTopicoAtivo] = useState<Topico | null>(null)

  return (
    <>
      <section
        id="historia"
        className="py-24 sm:py-28 px-6 bg-black border-t border-red-900"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* TEXTO */}
          <div className="relative">
            <span className="absolute -left-4 top-2 h-16 w-1 bg-blood hidden md:block"></span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-street text-blood tracking-widest mb-8">
              A HISTÓRIA
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-xl text-sm sm:text-base">
              Sabotage transformou vivência em verdade. Sua trajetória é marcada
              pela quebrada, pelo rap e pela responsabilidade de representar
              quem veio do mesmo lugar.
            </p>

            {/* TÓPICOS */}
            <div className="space-y-8 mt-10">
              {topicos.map((topico) => (
                <div
                  key={topico.titulo}
                  onClick={() => setTopicoAtivo(topico)}
                  className="cursor-pointer group"
                >
                  <h3
                    className="text-2xl sm:text-3xl font-street tracking-wider text-white
                               group-hover:text-blood transition"
                  >
                    {topico.titulo}
                  </h3>

                  <span
                    className="block w-10 h-[2px] bg-blood mt-2
                               group-hover:w-24 transition-all"
                  />

                  <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    Clique para ler mais
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative w-full h-[420px] sm:h-[550px] md:h-[750px] overflow-hidden group rounded-lg">
            <img
              src="/sabota-historia..png"
              alt="Sabotage"
              className="
                w-full h-full object-cover
                grayscale
                md:group-hover:grayscale-0
                md:group-hover:scale-105
                md:transition md:duration-700
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80 via-black/40 to-transparent
              "
            />
          </div>

        </div>
      </section>

      {/* MODAL */}
      {topicoAtivo && (
        <HistoriaModal
          topico={topicoAtivo}
          onClose={() => setTopicoAtivo(null)}
        />
      )}
    </>
  )
}