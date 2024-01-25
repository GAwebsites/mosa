import Link from "next/link";

interface LinkProps {
  label: string;
  href: string;
}

export default function NavLink({ label, href }: LinkProps) {
  return (
    <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-in-out">
      <Link href={href}>{label}</Link>
    </li>
  );
}
