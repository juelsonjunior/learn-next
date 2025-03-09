import { IconBrandReact } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="bg-black border-b border-zinc-800 px-6 py-3 flex justify-between items-center">
      <div className="flex justify-between gap-1">
        <IconBrandReact stroke={1} />
        <span>Next.js Essencial</span>
      </div>
      <IconUser stroke={1} />
    </header>
  );
}
