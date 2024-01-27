import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <header className="mb-5">
        <div className="flex justify-center p-6">Casa e Kids</div>
        <div className="flex px-4 items-center justify-between">
          <input className="border-2 h-8 px-4" type="text" />
          <IoSearch className="fill-white bg-slate-400 p-2 h-8 w-8"/> 
        </div>
      </header>

      <section className="bg-sky-300">
        <h2 className="px-4 py-8 font-bold text-lg text-white">Lista de Produtos</h2>
      </section>

      <section className="bg-gray-100 px-4 py-8">
        <div className="flex flex-col shadow p-4 bg-white mb-5">
          <Image src="/images/prod_01.jpg" alt="Camisa do homem aranha" width={350} height={350}/>
          <span className="mb-4 font-bold">
            <h4>Crew Seater</h4>
            <span>R$20,00</span>

          </span>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="flex p-4 bg-sky-600 cursor text-white justify-between items-center font-semibold hover:bg-sky-700">
            Comprar <FaExternalLinkAlt />
          </a>
        </div>

        <div className="flex flex-col shadow p-4 bg-white mb-5">
          <Image src="/images/prod_01.jpg" alt="Camisa do homem aranha" width={350} height={350}/>
          <span className="mb-4 font-bold">
            <h4>Crew Seater</h4>
            <span>R$20,00</span>

          </span>
          <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="flex p-4 bg-sky-600 cursor text-white justify-between items-center font-semibold hover:bg-sky-700">
            Comprar <FaExternalLinkAlt />
          </a>
        </div>
      </section>

    </main>
  );
}
