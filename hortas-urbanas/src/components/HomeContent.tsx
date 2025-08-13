import Image from 'next/image'

export default function HomeContent() {
  return (
    <div className='bg-white h-screen'>
      <div className='bg-gray-100 py-6'>
        <h1 className='text-emerald-800 text-center text-5xl font-bold'>HORTAS URBANAS</h1>
        <p className='text-gray-500 text-center max-w-md mx-auto mt-2 font-bold'>DIMINUIÇÃO DE CUSTOS DE TRANSPORTE E ACESSIBILIDADE PARA AS PESSOAS</p>
      </div>
      <div className='flex w-3/4 mx-auto gap-12 my-6 justify-center'>
        <Image src='/image.jpg' alt='Mulher colhendo hortaliças' width={250} height={350} className='rounded-2xl'/>
        <div className='min-w-80 max-w-80 my-auto'>
          <h3 className='text-emerald-800 font-bold mb-3 text-2xl'>O QUE SÃO HORTAS URBANAS?</h3>
          <p className='text-black text-xl'>Hortas urbanas são espaços dedicados ao cultivo de alimentos dentro das cidades, promovendo a produção local de alimentos frescos e saudáveis.</p>
          <button className='mt-3 bg-emerald-800 text-white text-xl px-2 py-1 rounded-3xl'>SAIBA MAIS</button>
        </div>
      </div>
      <div>
        <h2 className='text-emerald-900 text-4xl font-bold text-center'>BENEFÍCIOS</h2>
        <div className='flex gap-2 text-black text-center'>
          <div className='flexflex-col'>
            // icone
            <h3>Redução de custos</h3>
            <p>Diminui a necessidade de transporte de alimentos para as cidades</p>
          </div>
          <div className='flexflex-col'>
            // icone
            <h3>Acessibilidade</h3>
            <p>DFacilita o acesso a alimentos frescos e saudaveis</p>
          </div>
          <div className='flexflex-col'>
            // icone
            <h3>Sustentabilidade</h3>
            <p>Promove práticas sustentáveis e conscientização ambiental</p>
          </div>
        </div>
      </div>
    </div>
  )
}