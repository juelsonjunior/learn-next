import Link from "next/link";

export default function PageLayout() {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <h1 className="text-2xl">Conteúdo da pagina RAIZ</h1>
      <Link href="/layout/filha" className="btn">
        Pagina filha
      </Link>
    </div>
  );
}
