import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';


export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-pink-50 pt-16">
      <Image
        src="/img/profile.png"
        alt="Minha foto"
        width={250}
        height={160}
        className="rounded-full border-4 border-pink-600 mb-8"
      />
      <div className="text-2xl font-bold text-pink-600 mb-4">
        <Typewriter
          words={['Olá, eu sou Rayana!', 'Desenvolvedora Fullstack', 'Apaixonada por tecnologia, games e animes']}
          loop={0}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <div className="flex space-x-4 mt-4">      
        <Image src="/img/React-Native.png" alt="React" width={50} height={50} className="rounded-full" />
        <Image src="/img/images.png" alt="Angular" width={50} height={50} className="rounded-full" />
        <Image src="/img/1200x630wa.png" alt="TypeScript" width={50} height={50} className="rounded-full" />
      </div>
    </section>
  )
}



