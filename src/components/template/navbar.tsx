import NavLink from "./navlink";
import { IconHome } from "@tabler/icons-react";
import { IconLayoutGrid } from "@tabler/icons-react";
import { IconError404 } from "@tabler/icons-react";
import { IconListDetails } from "@tabler/icons-react";
import { IconArrowsDiff } from "@tabler/icons-react";
import { IconUserHexagon } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <aside className="w-80 bg-zinc-900 border-r border-zinc-800 p-6">
      <nav className="flex flex-col gap-2">
        <NavLink href="/" text="Inicio" icone={<IconHome stroke={1} />} />
        <NavLink
          href="/layout"
          text="Layout"
          icone={<IconLayoutGrid stroke={1} />}
        />
        <NavLink
          href="/not-found"
          text="Não existe"
          icone={<IconError404 stroke={1} />}
        />
        <NavLink
          href="/product"
          text="Produtos"
          icone={<IconListDetails stroke={1} />}
        />
        <NavLink
          href="/client-server"
          text="Cliente vs Servidor"
          icone={<IconArrowsDiff stroke={1} />}
        />
        <NavLink
          href="/admin"
          text="Administração"
          icone={<IconUserHexagon stroke={1} />}
        />
      </nav>
    </aside>
  );
}
