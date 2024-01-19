export default function Header() {
  return (
    <section className="h-20 w-full max-w-screen bg-grey text-white flex items-center justify-center">
      <div className="flex items-center justify-between w-4/5">
        <div>MOSA</div>
        <div className="hidden md:visible">
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
        <div className="hidden md:visible">
          <button className="px-8 py-3 bg-accent rounded-xl font-semibold hover:scale-105 transition-all duration-300 ease-in-out">
            Contacteer ons
          </button>
        </div>
      </div>
    </section>
  );
}
