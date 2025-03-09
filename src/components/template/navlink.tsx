import Link from "next/link";

interface NavLinkProps {
  icone?: any;
  text: string;
  href: string;
}
export default function NavLink(props: NavLinkProps) {
  return (
    <div className="flex  gap-2">
      {props.icone}
      <Link href={props.href}>{props.text}</Link>
    </div>
  );
}
