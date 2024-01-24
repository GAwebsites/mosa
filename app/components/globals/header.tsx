import Image from "next/image";

export default function Header() {
  return (
    <section className="h-20 w-screen bg-grey text-white flex items-center justify-center font-montserrat">
      <div className="flex items-center justify-center md:justify-between w-2/3">
        <div className="h-full flex items-center justify-center pt-2">
          <Image
            src={"/logos/logoBig.svg"}
            height={90}
            width={120}
            objectFit="contain"
            alt="Mosa logo"
            className="collapse md:flex"
          />
          <Image
            src={"/logos/logoSmall.svg"}
            height={70}
            width={70}
            objectFit="contain"
            alt="Mosa logo"
            className="md:collapse flex"
          />
        </div>
        <div className="collapse md:flex">
          <ul className="flex items-center justify-evenly gap-20">
            <li className="hover:text-accent hover:cursor-pointer transition-all duration-300 ease-in-out">
              Diensten
            </li>
            <li>Over ons</li>
            <li>Projecten</li>
            <li>Team</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="collapse md:flex">
          <button className="px-8 py-3 bg-accent rounded-xl font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
            Contacteer ons
          </button>
        </div>
      </div>
    </section>
  );
}
