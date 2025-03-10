import Link from "next/link";

export default function PageLayoutSon() {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <h1 className="text-2xl">Conteúdo da pagina Filha</h1>
      <div className="flex gap-2">
        <Link href="/layout" className="btn">
          Voltar
        </Link>
        <Link href="/" className="btn">
          Inicio
        </Link>
      </div>
    </div>
  );
}
