// components/TarotCards.tsx
import Image from 'next/image';
import Link from 'next/link';
import FadeInOnce from "@/app/fadeInOnce";

const cards = [
  {
    title: 'E.H.A.M: Escola Hermética de Alta Magia',
    description:
      'Escola Hermética de Alta Magia está de portas abertas para você que busca se tornar um mestre da magia.',
    img: '/images/escola-mago.png',
    href: '/pesquisador',
  },
  {
    title: 'Egrégora',
    description:
      'A EGRÉGORA é um serviço de RITUAL COLETIVO por ASSINATURA onde os assinantes têm acesso exclusivo a 2 RITUAIS COLETIVOS de alta magia por mês.',
    img: '/images/ordem-mago.png',
    href: '/intermediario',
  },
  {
    title: 'Mentoria',
    description:
      'Te ajudo a usar o conhecimento oculto da magia para acelerar os resultados na sua vida!',
    img: '/images/mentoria-mago.png',
    href: '/profissional',
  },
  {
    title: 'Tarot',
    description: 'Em uma colsulta particular você terá a oportunidade de fazer quantas perguntas desejar e receba insights profundos para tomar decisões com confiança.',
    img: '/images/tarot-mago.png',
    href: '/espiritualidade',
  },
  {
    title: 'Loja do Mago',
    description: 'A sua loja de artigos esótericos.',
    img: '/images/loja-itens.png',
    href: '/amor',
  },
  {
    title: 'App da E.H.A.M',
    description: 'Ao entrar na Escola Hermética de Alta Mágia você terá acesso à um aplicativo onde poderá ver todas as aulas da E.H.A.M, além de ter acesso a todos os podcast`s do mago.',
    img: '/images/stream.png',
    href: '/carreira',
  },
];

export default function AboutCards() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <FadeInOnce>
        <h2 className="animate-fade animate-once animate-duration-[3000ms]text-4xl font-bold text-yellow-400 mb-4">Toda egrégora em um só lugar</h2>
        </FadeInOnce>
        <FadeInOnce>
        <p className="animate-fade animate-once animate-duration-[3000ms] animate-delay-200 text-gray-100 mb-12 max-w-2xl mx-auto">
          Saiba mais sobre e entre na 'Escola Hermética de Alta Magia', participe de rituiais coletivos,compre seus itens ritualisticos, agende sua mentoria particular, constulta de tarot e fique por dentro de todas as novidades no 'Blog do Mago', tudo em su só lugar!
        </p>
        </FadeInOnce>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link key={index} href={card.href} className="flex flex-col bg-transparent border border-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <div className="w-full h-52 relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 text-center">
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">{card.title}</h3>
                <p className="text-gray-100 text-sm mb-4">{card.description}</p>
                <button className="mx-auto text-yellow-500 border border-yellow-500 px-4 py-2 roundedfont-bold rounded-full hover:bg-yellow-500/85 transition hover:text-black">
                  Saber Mais
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
