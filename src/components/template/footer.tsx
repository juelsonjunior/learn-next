export default function Footer() {
  return (
    <footer className="px-6 py-3 bg-black border-t border-zinc-800">
      <div className="flex justify-end">
        <p className="text-xs">Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
