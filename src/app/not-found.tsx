import Image from 'next/image'
import userLost from '@/assets/lost.webp'
import Link from 'next/link';

export default function Error404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-2">
      <Image src={userLost} alt='Erro-404' width={200} height={200}/>
      <p>Pagina não encontrada dev vagabundo</p>
      <Link href="/">Voltar a home</Link>
    </div>
  );
}
