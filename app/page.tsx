import Image from "next/image";

import heroBG from '@/public/heroBG.png';

export default function Home() {
  return (
    <main className="flex justify-center">
        <div className={`max-w-[1000px] w-full relative flex justify-center h-[900px]`}>
            <Image src={heroBG} alt={'No_error'} className={`w-full absolute lg:static`}/>
            <div className={`text-center absolute lg:top-[50%] lg:-translate-y-1/2 lg:left-[28%] max-w-[351px] font-light lg:text-2xl`}>
                <h2>
                    Рады приветствовать вас <br/>
                    в живом пространстве “Алиссум”
                </h2>
                <h2>
                    У нас вы можете <br/>
                    не только приобрести цветы, <br/>
                    но и посетить мастер-классы.
                </h2>
            </div>

        </div>
    </main>
  )
}
