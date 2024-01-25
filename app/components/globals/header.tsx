import Image from "next/image";
import Link from "next/link";
import NavLink from "./link";

export default function Header() {
  return (
    <section className="h-20 w-screen bg-grey text-white flex items-center justify-center font-montserrat">
      <div className="flex items-center justify-center md:justify-between w-2/3">
        <a href="/">
          <div className="h-full flex items-center justify-center pt-2">
            <Image
              src={"/logos/logoBig.svg"}
              height={90}
              width={120}
              alt="Mosa logo"
              className="collapse md:visible object-cover"
            />
            <Image
              src={"/logos/logoSmall.svg"}
              height={70}
              width={70}
              alt="Mosa logo"
              className="md:collapse visible object-cover"
            />
          </div>
        </a>

        <div className="collapse md:visible">
          <ul className="flex items-center justify-evenly gap-20">
            <NavLink href="/services" label="Diensten" />
            <NavLink href="/projects" label="Projecten" />
            <NavLink href="/contact" label="Contact" />
            <NavLink href="/team" label="Het team" />
            <NavLink href="/blog" label="Blog" />
          </ul>
        </div>
        <div className="collapse md:visible">
          <button className="px-8 py-3 bg-accent rounded-xl font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
            Contacteer ons
          </button>
        </div>
      </div>
    </section>
  );
}
