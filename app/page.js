import Image from "next/image";
import HeroImage from '@/app/assets/omar-ram.jpeg';

export default function Home() {
  return (
    <div className="flex flex-col p-20 justify-around">
    <Image
      alt="Mountains"
      src={HeroImage}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vh"
      style={{
        objectFit: 'cover',
      }}
      className='-z-10'
    />
      
     <div className="flex flex-col justify-center">
         <h1 className="text-4xl text-red-700 font-extrabold">RED ANTS FC</h1>
          <p className="py-5 text-white">UNITY | STRENGTH | TENACITY</p>
     </div>

    </div>

  );
}
