import Image from "next/image"

export default function SobreContent() {
  return (
    <div className='flex flex-col pt-[120] bg-white h-screen text-black'>
      <h1 className='text-emerald-800 text-center text-5xl font-bold'>Sobre o Projeto</h1>
      <p className='max-w-1/3 text-center mx-auto text-lg my-[30]'>O projeto Hortas Urbanas tem como objetivo promover o cultivo de alimentos frescos e saudáveis em áreas urbanas, reduzindo os custos de transporte, aumentando a acessibilidade e incentivando praticas sustentáveis.</p>
      <div className='flex gap-5 mx-auto'>
        <div>
          <div className='w-[500] bg-blue-100 p-5 rounded-xl mx-auto'>
            <h2 className='text-emerald-800 text-2xl font-bold'>Porque é importante?</h2>
            <p>Com o crescimento das cidades e das distâncias entre áreas de produção e consumo, o transporte de alimentos se torna caro e poluente. As hortas urbanas trazem a produção para mais perto que quem consome reduzindo o impacto ambiental e fortalecendo a comunidade.</p>
          </div>
          <div className='w-[500] mx-auto mt-[30]'>
            <h2 className='text-emerald-800 text-2xl font-bold'>Benefícios para a Comunidade</h2>
            <ul className='list-disc px-5 mt-[10]'>
              <li><b>Alimentos mais Frescos e Saudáveis:</b> Produção próxima ao consumo garante mais qualidade e menos conservantes.</li>
              <li><b>Fortalecimento da economia local:</b> Geração de empregos e renda dentro da comunidade.</li>
              <li><b>Baixo custo de entrada:</b> Possibilidade de iniciar com pequenos espaços e investimento reduzido.</li>
            </ul>
          </div>
        </div>
        <Image src='/cultivo.png' alt='Senhor cultivando hortaliças' width={500} height={100} className='rounded-xl'/>
      </div>
    </div>
  )
}