import Image from 'next/image'

export default function Header() {
  return (
    <div className={`
    flex 
    justify-between
    align-middle
    bg-white 
    text-emerald-800
    font-bold
    w-full
    h-full
    py-4
    px-6
    text-xl
    `}>
      <div className='flex gap-2 w-1/3 h-full'>
        <Image 
        src="/folha.jpg" 
        alt="Folha"
        width={48}
        height={48}/>
        <h1 className='my-auto'>Hortas Urbanas</h1>
      </div>
      <div className='relative z-1 w-1/3 text-center'>
        <h1 className={
          `absolute 
          text-5xl 
          bg-clip-text 
          text-transparent 
          bg-[url(/folha.jpg)] 
          bg-cover
          bg-center
          w-full
          `}>IBIACY</h1>
      </div>
      <ul className={`
        flex
        justify-end
        gap-3
        w-1/3
        h-12
        items-center
        `}>
        <li>Inicio</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </div>
  )
}